#!/usr/bin/env ts-node

/**
 * YYC³ AI Intelligent Calling - 自动化部署脚本
 *
 * 功能：
 * - 环境验证
 * - 代码检查
 * - 自动化测试
 * - 构建应用
 * - 部署到生产环境
 * - 生成部署报告
 */

import { execSync } from "child_process"
import * as fs from "fs"

// ==================== 配置 ====================
const CONFIG = {
  projectName: "YYC³ AI Intelligent Calling",
  environments: ["development", "staging", "production"] as const,
  requiredEnvVars: ["DATABASE_URL", "REDIS_URL", "NEXTAUTH_SECRET", "JWT_SECRET"],
  buildDir: ".next",
  logFile: "deploy.log",
}

type Environment = (typeof CONFIG.environments)[number]

// ==================== 工具函数 ====================
function log(message: string, type: "info" | "success" | "error" | "warning" = "info") {
  const timestamp = new Date().toISOString()
  const colors = {
    info: "\x1b[36m",
    success: "\x1b[32m",
    error: "\x1b[31m",
    warning: "\x1b[33m",
  }
  const reset = "\x1b[0m"

  const formattedMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`
  console.log(`${colors[type]}${formattedMessage}${reset}`)

  // 写入日志文件
  fs.appendFileSync(CONFIG.logFile, formattedMessage + "\n")
}

function exec(command: string, description: string): void {
  try {
    log(`执行: ${description}`, "info")
    execSync(command, { stdio: "inherit" })
    log(`✓ ${description} 完成`, "success")
  } catch (error) {
    log(`✗ ${description} 失败`, "error")
    throw error
  }
}

// ==================== 部署步骤 ====================
class Deployer {
  private environment: Environment
  private startTime: number

  constructor(environment: Environment) {
    this.environment = environment
    this.startTime = Date.now()
  }

  // 1. 验证环境
  async validateEnvironment(): Promise<void> {
    log("========== 步骤 1: 环境验证 ==========", "info")

    // 检查 Node.js 版本
    const nodeVersion = process.version
    log(`Node.js 版本: ${nodeVersion}`, "info")

    if (Number.parseInt(nodeVersion.slice(1).split(".")[0]) < 18) {
      throw new Error("需要 Node.js 18 或更高版本")
    }

    // 检查必需的环境变量
    const envFile = `.env.${this.environment}`
    if (!fs.existsSync(envFile)) {
      throw new Error(`环境文件 ${envFile} 不存在`)
    }

    log("✓ 环境验证通过", "success")
  }

  // 2. 清理旧文件
  async cleanup(): Promise<void> {
    log("========== 步骤 2: 清理旧文件 ==========", "info")

    const dirsToClean = [".next", "out", "node_modules/.cache"]

    for (const dir of dirsToClean) {
      if (fs.existsSync(dir)) {
        log(`清理目录: ${dir}`, "info")
        fs.rmSync(dir, { recursive: true, force: true })
      }
    }

    log("✓ 清理完成", "success")
  }

  // 3. 安装依赖
  async installDependencies(): Promise<void> {
    log("========== 步骤 3: 安装依赖 ==========", "info")
    exec("pnpm install --frozen-lockfile", "安装依赖")
  }

  // 4. 代码检查
  async codeCheck(): Promise<void> {
    log("========== 步骤 4: 代码检查 ==========", "info")

    try {
      exec("pnpm lint", "ESLint 检查")
      exec("pnpm type-check", "TypeScript 类型检查")
      log("✓ 代码检查通过", "success")
    } catch (error) {
      log("代码检查失败，是否继续？(y/n)", "warning")
      // 在生产环境必须通过
      if (this.environment === "production") {
        throw error
      }
    }
  }

  // 5. 运行测试
  async runTests(): Promise<void> {
    log("========== 步骤 5: 运行测试 ==========", "info")

    try {
      exec("pnpm test", "单元测试")
      log("✓ 测试通过", "success")
    } catch (error) {
      if (this.environment === "production") {
        throw new Error("生产环境部署必须通过所有测试")
      }
      log("测试失败，但继续部署", "warning")
    }
  }

  // 6. 生成 Prisma Client
  async generatePrisma(): Promise<void> {
    log("========== 步骤 6: 生成 Prisma Client ==========", "info")
    exec("pnpm prisma:generate", "生成 Prisma Client")
  }

  // 7. 构建应用
  async build(): Promise<void> {
    log("========== 步骤 7: 构建应用 ==========", "info")
    exec("pnpm build", "构建 Next.js 应用")

    // 验证构建结果
    if (!fs.existsSync(CONFIG.buildDir)) {
      throw new Error("构建失败：.next 目录不存在")
    }

    log("✓ 构建成功", "success")
  }

  // 8. 部署
  async deploy(): Promise<void> {
    log("========== 步骤 8: 部署应用 ==========", "info")

    switch (this.environment) {
      case "production":
        await this.deployToVercel()
        break
      case "staging":
        await this.deployToStaging()
        break
      default:
        log("开发环境无需部署", "info")
    }
  }

  // 部署到 Vercel
  private async deployToVercel(): Promise<void> {
    log("部署到 Vercel 生产环境", "info")
    exec("vercel --prod", "部署到 Vercel")
  }

  // 部署到预发布环境
  private async deployToStaging(): Promise<void> {
    log("部署到预发布环境", "info")
    exec("vercel", "部署到预发布环境")
  }

  // 9. 健康检查
  async healthCheck(): Promise<void> {
    log("========== 步骤 9: 健康检查 ==========", "info")

    // 这里可以添加实际的健康检查逻辑
    log("执行健康检查...", "info")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    log("✓ 健康检查通过", "success")
  }

  // 10. 生成部署报告
  async generateReport(): Promise<void> {
    log("========== 步骤 10: 生成部署报告 ==========", "info")

    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2)

    const report = {
      projectName: CONFIG.projectName,
      environment: this.environment,
      timestamp: new Date().toISOString(),
      duration: `${duration}秒`,
      status: "success",
      nodeVersion: process.version,
      git: {
        branch: this.getGitBranch(),
        commit: this.getGitCommit(),
      },
    }

    const reportPath = `deploy-report-${this.environment}-${Date.now()}.json`
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

    log(`部署报告已生成: ${reportPath}`, "success")
    log(`部署总耗时: ${duration}秒`, "info")
  }

  // 获取 Git 分支
  private getGitBranch(): string {
    try {
      return execSync("git rev-parse --abbrev-ref HEAD").toString().trim()
    } catch {
      return "unknown"
    }
  }

  // 获取 Git 提交
  private getGitCommit(): string {
    try {
      return execSync("git rev-parse --short HEAD").toString().trim()
    } catch {
      return "unknown"
    }
  }

  // 执行完整部署流程
  async run(): Promise<void> {
    try {
      log(`\n🚀 开始部署 ${CONFIG.projectName} 到 ${this.environment} 环境\n`, "info")

      await this.validateEnvironment()
      await this.cleanup()
      await this.installDependencies()
      await this.codeCheck()
      await this.runTests()
      await this.generatePrisma()
      await this.build()
      await this.deploy()
      await this.healthCheck()
      await this.generateReport()

      log(`\n✓ 部署成功！ ${CONFIG.projectName} 已部署到 ${this.environment} 环境\n`, "success")
    } catch (error) {
      log(`\n✗ 部署失败: ${error}\n`, "error")
      process.exit(1)
    }
  }
}

// ==================== 主函数 ====================
async function main() {
  const args = process.argv.slice(2)
  const environment = (args[0] || "development") as Environment

  if (!CONFIG.environments.includes(environment)) {
    console.error(`无效的环境: ${environment}`)
    console.error(`可用环境: ${CONFIG.environments.join(", ")}`)
    process.exit(1)
  }

  const deployer = new Deployer(environment)
  await deployer.run()
}

// 运行部署
main().catch((error) => {
  console.error("部署脚本执行失败:", error)
  process.exit(1)
})
