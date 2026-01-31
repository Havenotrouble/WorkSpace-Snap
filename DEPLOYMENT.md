# 部署指南

本文档说明如何将 WorkSpace Snap 官网部署到 Vercel。

## 前置要求

- GitHub 账号
- Vercel 账号（可使用 GitHub 登录）
- Node.js 18+ 已安装

## 快速部署

### 方法一：一键部署（推荐）

1. 点击下方按钮一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Havenotrouble/workspace-snap-web)

2. 按照提示完成部署

### 方法二：手动部署

#### 1. 准备仓库

```bash
# 克隆项目
git clone https://github.com/Havenotrouble/workspace-snap-web.git
cd workspace-snap-web

# 安装依赖
npm install

# 本地测试
npm run dev
```

#### 2. 连接 Vercel

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署到 Vercel
vercel
```

#### 3. 配置环境变量

在 Vercel 项目设置中添加以下环境变量：

**必需的环境变量：**

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**可选的环境变量：**

```bash
# GitHub 配置（用于自动获取 Release 信息）
GITHUB_USERNAME=your-username
GITHUB_REPO=workspace-snap
GITHUB_TOKEN=ghp_your_token

# Discord Webhook（用于接收反馈通知）
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/xxx
```

#### 4. 配置自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

## 功能配置

### 启用 Vercel Analytics

1. 进入 Vercel 项目设置
2. 点击 "Analytics" 选项卡
3. 点击 "Enable Analytics"

Analytics 已集成在代码中，启用后即可自动收集数据。

### 配置 GitHub Release 集成

为了让网站自动获取最新版本信息，需要配置 GitHub Token：

1. 访问 [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. 创建新的 Token，勾选 `public_repo` 权限
3. 复制 Token
4. 在 Vercel 环境变量中添加：
   - `GITHUB_USERNAME`: 你的 GitHub 用户名
   - `GITHUB_REPO`: 仓库名称（workspace-snap）
   - `GITHUB_TOKEN`: 刚才生成的 Token

### 配置 Discord 通知（可选）

如果想在收到用户反馈时获得通知：

1. 在 Discord 服务器中创建 Webhook
2. 复制 Webhook URL
3. 在 Vercel 环境变量中添加 `DISCORD_WEBHOOK_URL`

## API 端点

部署后可用的 API 端点：

- `GET /api/version` - 获取最新版本信息
- `POST /api/feedback` - 提交用户反馈

### 测试 API

```bash
# 获取版本信息
curl https://your-domain.com/api/version

# 提交反馈
curl -X POST https://your-domain.com/api/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "message": "测试反馈信息",
    "type": "feature"
  }'
```

## 性能优化

### 缓存配置

- 静态资源：自动缓存 365 天
- API 响应：`/api/version` 缓存 5 分钟
- 页面：自动增量静态生成

### CDN 配置

Vercel 自动使用全球 CDN，无需额外配置。

## 监控

### Vercel Analytics

查看访问数据：
1. 访问 Vercel 仪表板
2. 选择项目
3. 点击 "Analytics"

### 日志查看

查看函数日志：
1. 访问 Vercel 仪表板
2. 选择项目
3. 点击 "Functions" 或 "Logs"

## 故障排查

### 构建失败

检查：
1. Node.js 版本是否 >= 18
2. 依赖是否正确安装
3. 环境变量是否配置正确

### API 不工作

检查：
1. API 路由文件是否存在
2. 环境变量是否设置
3. 查看函数日志

### 样式问题

检查：
1. Tailwind CSS 配置是否正确
2. 全局样式是否加载
3. 清除浏览器缓存

## 更新部署

### 自动部署

推送到 GitHub 主分支会自动触发部署：

```bash
git add .
git commit -m "Update website"
git push origin main
```

### 手动部署

```bash
vercel --prod
```

## 回滚

如果新版本有问题：

1. 访问 Vercel 仪表板
2. 选择项目
3. 点击 "Deployments"
4. 找到之前的稳定版本
5. 点击 "Promote to Production"

## 支持

如有问题，请：
- 查看 [Vercel 文档](https://vercel.com/docs)
- 提交 [GitHub Issue](https://github.com/Havenotrouble/workspace-snap-web/issues)
