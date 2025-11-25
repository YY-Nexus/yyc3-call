# ==================== YYC³ AI Intelligent Calling - Production Dockerfile ====================
# 多阶段构建，优化镜像大小

# ==================== 基础阶段 ====================
FROM node:18-alpine AS base

# 安装 pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 设置工作目录
WORKDIR /app

# 复制 package 文件
COPY package.json pnpm-lock.yaml ./

# ==================== 依赖安装阶段 ====================
FROM base AS deps

# 安装生产依赖
RUN pnpm install --frozen-lockfile --prod

# ==================== 构建阶段 ====================
FROM base AS builder

# 复制依赖
COPY --from=deps /app/node_modules ./node_modules

# 复制源代码
COPY . .

# 设置环境变量
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# 生成 Prisma Client
RUN pnpm prisma:generate

# 构建应用
RUN pnpm build

# ==================== 运行阶段 ====================
FROM base AS runner

# 安装 dumb-init (处理信号)
RUN apk add --no-cache dumb-init

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# 设置工作目录
WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# 复制必要文件
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 切换到非 root 用户
USER nextjs

# 暴露端口
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# 启动应用
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
