# YYC³ AI Intelligent Calling

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/95558/v0-zy-intelligent-customer-care-ce)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/doU2j0XKhcv)
[![Build Status](https://github.com/yourusername/yyc3-ai-calling/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/yourusername/yyc3-ai-calling/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![Next.js](https://img.shields.io/badge/Next.js-15.0-black)](https://nextjs.org)

<div align="center">

![YYC³ AI Logo](./public/logo.png)

**智能外呼系统 - AI 驱动的新一代客户服务平台**

[🌐 在线演示](https://yyc3-ai-calling.vercel.app) | [📖 文档](./docs) | [🐛 问题反馈](https://github.com/yourusername/yyc3-ai-calling/issues)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [核心功能](#核心功能)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [环境配置](#环境配置)
- [部署指南](#部署指南)
- [开发指南](#开发指南)
- [项目结构](#项目结构)
- [API 文档](#api-文档)
- [性能优化](#性能优化)
- [安全性](#安全性)
- [常见问题](#常见问题)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 🎯 项目简介

YYC³ AI Intelligent Calling 是一个基于 AI 技术的智能外呼系统，专为现代企业客户服务场景设计。系统集成了先进的语音识别、自然语言处理和智能对话能力，提供全方位的客户服务解决方案。

### ✨ 核心优势

- 🤖 **AI 驱动** - 集成 GPT-4、Grok-3 等先进 AI 模型
- 📞 **智能外呼** - 自动化外呼流程，提升效率 300%
- 👥 **客户 360°** - 全方位客户画像与行为分析
- 📊 **数据洞察** - 实时数据分析与可视化看板
- 🎨 **现代 UI** - 基于 Next.js 15 和 Tailwind CSS 的响应式界面
- 🔒 **企业级安全** - 多重安全防护，符合数据合规要求

---

## 🚀 核心功能

### 1. 智能外呼系统
- 自动拨号与呼叫分配
- AI 语音对话与情绪识别
- 通话录音与质检分析
- 实时通话监控与报表

### 2. 客户管理（CRM）
- 客户信息管理
- 标签分类与分组
- 互动历史记录
- 客户旅程追踪

### 3. 客户 360° 画像
- 多维度数据整合
- 行为分析与预测
- 价值评估与分层
- 智能推荐引擎

### 4. 营销自动化
- 智能营销活动创建
- 多渠道触达（电话、短信、邮件）
- A/B 测试与优化
- ROI 分析与报告

### 5. 智能表单
- 拖拽式表单设计器
- 动态字段与逻辑跳转
- 数据验证与清洗
- 自动化工作流触发

### 6. 号码数据库
- 号码池管理
- 黑名单/白名单
- 号码质量评分
- 批量导入/导出

### 7. 数据分析
- 实时数据看板
- 多维度报表
- 趋势分析与预测
- 自定义指标

### 8. 移动应用
- iOS/Android 原生体验
- 离线功能支持
- 推送通知
- 移动端审批流

---

## 🛠 技术栈

### 前端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 15.0+ | React 全栈框架 |
| **React** | 18.3+ | UI 组件库 |
| **TypeScript** | 5.0+ | 类型安全 |
| **Tailwind CSS** | 3.4+ | 原子化 CSS |
| **Framer Motion** | 11.0+ | 动画库 |
| **shadcn/ui** | Latest | 组件库 |
| **Recharts** | 2.12+ | 数据可视化 |
| **TanStack Query** | 5.0+ | 数据获取 |
| **Zustand** | 4.5+ | 状态管理 |

### 后端技术

| 技术 | 版本 | 用途 |
|------|------|------|
| **Node.js** | 18.0+ | 运行时 |
| **MySQL** | 8.0+ | 关系数据库 |
| **Redis** | 7.0+ | 缓存/会话 |
| **Prisma** | 5.0+ | ORM |
| **NextAuth.js** | 5.0+ | 身份认证 |

### AI 服务

- **OpenAI GPT-4** - 对话生成
- **xAI Grok-3** - 高级推理
- **Groq** - 快速推理
- **讯飞语音** - 中文语音识别
- **阿里云 NLS** - 语音合成

### 基础设施

- **Vercel** - 应用托管
- **Docker** - 容器化
- **GitHub Actions** - CI/CD
- **Sentry** - 错误监控
- **Nginx** - 反向代理

---

## ⚡ 快速开始

### 前置要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (推荐) 或 npm/yarn
- **MySQL** >= 8.0
- **Redis** >= 7.0
- **Git**

### 安装步骤

\`\`\`bash
# 1. 克隆项目
git clone https://github.com/yourusername/yyc3-ai-calling.git
cd yyc3-ai-calling

# 2. 安装依赖
pnpm install

# 3. 配置环境变量
cp .env.local.example .env.local
# 编辑 .env.local 填入您的配置

# 4. 初始化数据库
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed

# 5. 启动开发服务器
pnpm dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

---

## 🔐 环境配置

### 1. 复制环境变量文件

\`\`\`bash
# 开发环境
cp .env.local.example .env.local

# 生产环境
cp .env.example .env.production
\`\`\`

### 2. 配置数据库（MySQL）

\`\`\`env
# MySQL 数据库配置
DB_HOST=localhost
DB_PORT=3306
DB_NAME=yyc3_yy
DB_USER=yyc3_zh
DB_PASS=yyc3_zh
DB_CHARSET=utf8mb4
DB_COLLATION=utf8mb4_unicode_ci

# Prisma 连接字符串
DATABASE_URL="mysql://yyc3_zh:yyc3_zh@localhost:3306/yyc3_yy?schema=public"
\`\`\`

### 3. 配置 Redis

\`\`\`env
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password
\`\`\`

### 4. 配置认证

\`\`\`env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_min_32_chars
JWT_SECRET=your_jwt_secret_min_32_chars
\`\`\`

### 5. 配置 AI 服务

\`\`\`env
# OpenAI
OPENAI_API_KEY=sk-...

# xAI (可选)
XAI_API_KEY=xai-...

# Groq (可选)
GROQ_API_KEY=gsk_...
\`\`\`

### 6. 配置通信服务

\`\`\`env
# 阿里云短信
ALIYUN_SMS_ACCESS_KEY_ID=your_key
ALIYUN_SMS_ACCESS_KEY_SECRET=your_secret
ALIYUN_SMS_SIGN_NAME=YYC³智能外呼

# SMTP 邮件
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@yyc3.com
SMTP_PASSWORD=your_smtp_password
\`\`\`

完整配置请参考 [`.env.example`](.env.example) 文件。

---

## 🚢 部署指南

### Vercel 部署（推荐）

#### 方式一：通过 Vercel CLI

\`\`\`bash
# 1. 安装 Vercel CLI
pnpm add -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署
vercel --prod
\`\`\`

#### 方式二：通过 GitHub 集成

1. 将代码推送到 GitHub
2. 在 [Vercel Dashboard](https://vercel.com/dashboard) 导入项目
3. 配置环境变量
4. 点击 Deploy

### Docker 部署

\`\`\`bash
# 1. 构建镜像
docker build -t yyc3-ai-calling .

# 2. 使用 docker-compose 启动
docker-compose up -d

# 3. 查看日志
docker-compose logs -f app
\`\`\`

### 生产环境检查清单

- [ ] 配置所有必需的环境变量
- [ ] 更新 `NEXTAUTH_URL` 为生产域名
- [ ] 配置数据库连接和备份
- [ ] 设置 Redis 密码和持久化
- [ ] 配置 SSL 证书（HTTPS）
- [ ] 启用 Sentry 错误监控
- [ ] 配置 CDN 和静态资源
- [ ] 设置数据库连接池
- [ ] 启用速率限制
- [ ] 配置日志收集
- [ ] 测试邮件/短信发送
- [ ] 验证支付接口
- [ ] 执行安全扫描
- [ ] 性能测试和压测
- [ ] 备份恢复测试

---

## 💻 开发指南

### 项目命令

\`\`\`bash
# 开发
pnpm dev              # 启动开发服务器
pnpm dev:https        # 启动 HTTPS 开发服务器

# 构建
pnpm build            # 生产构建
pnpm start            # 启动生产服务器

# 代码质量
pnpm lint             # ESLint 检查
pnpm lint:fix         # 自动修复
pnpm format           # Prettier 格式化
pnpm type-check       # TypeScript 类型检查

# 测试
pnpm test             # 运行测试
pnpm test:watch       # 监听模式
pnpm test:coverage    # 覆盖率报告
pnpm test:e2e         # E2E 测试

# 数据库
pnpm prisma:generate  # 生成 Prisma Client
pnpm prisma:migrate   # 执行迁移
pnpm prisma:studio    # 打开数据库管理界面
pnpm prisma:seed      # 填充测试数据

# 部署
pnpm deploy:prod      # 部署到生产环境
pnpm deploy:preview   # 部署到预览环境
\`\`\`

### 代码规范

项目使用 ESLint + Prettier 确保代码质量：

\`\`\`bash
# 检查代码
pnpm lint

# 自动修复
pnpm lint:fix

# 格式化代码
pnpm format
\`\`\`

### Git 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

\`\`\`bash
feat: 新功能
fix: 修复 Bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建/工具链更新
\`\`\`

示例：
\`\`\`bash
git commit -m "feat: 添加客户360°画像功能"
git commit -m "fix: 修复外呼系统连接超时问题"
\`\`\`

---

## 📁 项目结构

\`\`\`
yyc3-ai-calling/
├── .github/                    # GitHub 配置
│   └── workflows/             # CI/CD 工作流
│       ├── ci-cd-production.yml
│       ├── dependency-review.yml
│       └── code-scanning.yml
├── app/                        # Next.js App Router
│   ├── (auth)/                # 认证相关页面
│   ├── (dashboard)/           # 仪表板页面
│   ├── api/                   # API 路由
│   ├── layout.tsx             # 根布局
│   ├── page.tsx               # 首页
│   └── globals.css            # 全局样式
├── components/                 # React 组件
│   ├── ui/                    # shadcn/ui 组件
│   ├── customer-management/   # 客户管理组件
│   ├── intelligent-phone-database.tsx
│   ├── customer-profile-360.tsx
│   ├── data-analytics.tsx
│   ├── intelligent-forms.tsx
│   ├── marketing-automation.tsx
│   ├── mobile-application.tsx
│   └── smart-call-system.tsx
├── lib/                        # 工具函数
│   ├── utils.ts               # 通用工具
│   ├── db.ts                  # 数据库连接
│   ├── redis.ts               # Redis 客户端
│   └── ai/                    # AI 服务集成
├── prisma/                     # Prisma ORM
│   ├── schema.prisma          # 数据模型
│   ├── migrations/            # 数据库迁移
│   └── seed.ts                # 测试数据
├── public/                     # 静态资源
│   ├── logo.png               # Logo
│   └── images/                # 图片资源
├── scripts/                    # 脚本
│   ├── deploy.ts              # 部署脚本
│   └── setup.sh               # 安装脚本
├── docs/                       # 文档
│   ├── DEPLOYMENT.md          # 部署文档
│   ├── CICD.md                # CI/CD 文档
│   └── API.md                 # API 文档
├── docker/                     # Docker 配置
│   └── nginx/                 # Nginx 配置
├── .env.example                # 环境变量示例
├── .env.local.example          # 本地环境示例
├── docker-compose.yml          # Docker Compose
├── Dockerfile                  # Docker 镜像
├── next.config.mjs             # Next.js 配置
├── tailwind.config.ts          # Tailwind 配置
├── tsconfig.json               # TypeScript 配置
└── package.json                # 项目依赖
\`\`\`

---

## 📚 API 文档

### 认证 API

#### POST `/api/auth/login`
用户登录

**请求体：**
\`\`\`json
{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

**响应：**
\`\`\`json
{
  "token": "jwt_token",
  "user": {
    "id": "1",
    "email": "user@example.com",
    "name": "张三"
  }
}
\`\`\`

### 客户管理 API

#### GET `/api/customers`
获取客户列表

**查询参数：**
- `page`: 页码（默认: 1）
- `limit`: 每页数量（默认: 20）
- `search`: 搜索关键词
- `tag`: 标签筛选

**响应：**
\`\`\`json
{
  "customers": [...],
  "total": 100,
  "page": 1,
  "limit": 20
}
\`\`\`

#### POST `/api/customers`
创建客户

**请求体：**
\`\`\`json
{
  "name": "客户名称",
  "phone": "13800138000",
  "email": "customer@example.com",
  "tags": ["VIP", "重点客户"]
}
\`\`\`

### 外呼系统 API

#### POST `/api/calls/initiate`
发起外呼

**请求体：**
\`\`\`json
{
  "customerId": "customer_id",
  "phoneNumber": "13800138000",
  "campaignId": "campaign_id"
}
\`\`\`

完整 API 文档请参考 [API.md](./docs/API.md)

---

## ⚡ 性能优化

### 1. 构建优化

- **代码分割**: 使用 Next.js 动态导入
- **Tree Shaking**: 移除未使用的代码
- **图片优化**: 使用 `next/image` 自动优化
- **字体优化**: 使用 `next/font` 优化字体加载

### 2. 运行时优化

- **React Server Components**: 减少客户端 JavaScript
- **Streaming SSR**: 流式渲染提升首屏速度
- **Partial Prerendering**: 混合静态和动态内容
- **缓存策略**: Redis + CDN 多级缓存

### 3. 数据库优化

\`\`\`typescript
// 使用索引
model Customer {
  id    String @id @default(cuid())
  phone String @unique
  email String @unique
  
  @@index([phone])
  @@index([email])
}

// 连接池配置
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
  poolTimeout = 30
}
\`\`\`

### 4. 性能指标

我们的目标性能指标：

- **LCP** (Largest Contentful Paint) < 2.5s
- **FID** (First Input Delay) < 100ms
- **CLS** (Cumulative Layout Shift) < 0.1
- **TTFB** (Time to First Byte) < 600ms

---

## 🔒 安全性

### 1. 认证与授权

- 使用 NextAuth.js 实现 OAuth 2.0
- JWT Token 签名和验证
- 会话管理和过期控制
- RBAC 角色权限系统

### 2. 数据保护

- 敏感数据加密存储
- HTTPS 强制加密传输
- SQL 注入防护（Prisma ORM）
- XSS 防护（CSP 策略）

### 3. API 安全

\`\`\`typescript
// 速率限制
import { rateLimit } from '@/lib/rate-limit'

export async function POST(req: Request) {
  const limiter = await rateLimit(req)
  if (!limiter.success) {
    return new Response('Too Many Requests', { status: 429 })
  }
  // ...
}
\`\`\`

### 4. 环境变量

\`\`\`bash
# ⚠️ 永远不要提交 .env 文件到 Git
echo ".env*" >> .gitignore
echo "!.env.example" >> .gitignore
\`\`\`

### 5. 安全头部

\`\`\`typescript
// next.config.mjs
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
\`\`\`

---

## ❓ 常见问题

### Q1: 如何切换数据库？

**A**: 修改 `DATABASE_URL` 环境变量，然后重新生成 Prisma Client：

\`\`\`bash
# 更新 .env.local
DATABASE_URL="mysql://user:pass@localhost:3306/dbname"

# 重新生成
pnpm prisma:generate
pnpm prisma:migrate
\`\`\`

### Q2: 如何添加新的 AI 模型？

**A**: 在 `lib/ai/` 目录下创建新的服务文件：

\`\`\`typescript
// lib/ai/custom-ai.ts
export async function generateWithCustomAI(prompt: string) {
  // 实现逻辑
}
\`\`\`

### Q3: 如何自定义主题？

**A**: 修改 `tailwind.config.ts` 和 `app/globals.css`：

\`\`\`typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#your-color',
          // ...
        }
      }
    }
  }
}
\`\`\`

### Q4: 如何处理大文件上传？

**A**: 使用 Vercel Blob 或阿里云 OSS：

\`\`\`typescript
import { put } from '@vercel/blob'

export async function uploadFile(file: File) {
  const blob = await put(file.name, file, {
    access: 'public',
  })
  return blob.url
}
\`\`\`

### Q5: 如何优化首次加载速度？

**A**: 
1. 启用 Next.js App Router 的流式渲染
2. 使用 React Server Components
3. 懒加载非关键组件
4. 优化图片和字体
5. 启用 CDN 缓存

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 如何贡献

1. **Fork 项目**
2. **创建特性分支** (`git checkout -b feature/AmazingFeature`)
3. **提交更改** (`git commit -m 'feat: Add some AmazingFeature'`)
4. **推送到分支** (`git push origin feature/AmazingFeature`)
5. **开启 Pull Request**

### 代码审查流程

1. 所有 PR 必须通过 CI/CD 检查
2. 需要至少一位维护者审核
3. 必须遵循代码规范
4. 需要添加相应的测试

### 报告 Bug

在 [GitHub Issues](https://github.com/yourusername/yyc3-ai-calling/issues) 创建问题时，请包含：

- Bug 描述
- 复现步骤
- 预期行为
- 实际行为
- 截图（如有）
- 环境信息

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

## 👥 团队

- **项目负责人**: YYC³ Team
- **技术负责人**: YYC³
- **设计负责人**: YYC³

---

## 📞 联系我们

- **官网**: https://yyc3.com
- **邮箱**: admin@0379.email
- **微信**: YYC3_AI
- **GitHub**: https://github.com/yourusername/yyc3-ai-calling

---

## 🙏 致谢

感谢以下开源项目：

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Prisma](https://www.prisma.io)
- [Vercel](https://vercel.com)

---

<div align="center">

**用 ❤️ 构建 | YYC³ AI Intelligent Calling**

Made with ❤️ by YYC³ Team

</div>

## Deployment

Your project is live at:

**[https://vercel.com/95558/v0-zy-intelligent-customer-care-ce](https://vercel.com/95558/v0-zy-intelligent-customer-care-ce)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/doU2j0XKhcv](https://v0.app/chat/projects/doU2j0XKhcv)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
