# 部署前检查清单

在部署到生产环境之前，请确认以下所有项目：

## ✅ 代码检查

- [ ] 所有代码已提交到 Git
- [ ] TypeScript 类型检查通过 (`npm run type-check`)
- [ ] 本地构建成功 (`npm run build`)
- [ ] 本地生产环境测试通过 (`npm run start`)
- [ ] ESLint 检查通过 (`npm run lint`)

## ✅ 配置检查

- [ ] `package.json` 信息已更新（name, description, repository）
- [ ] `.env.example` 已包含所有必需的环境变量
- [ ] `next.config.mjs` 配置正确
- [ ] `vercel.json` 配置正确（如果使用）

## ✅ 内容检查

- [ ] 所有占位符文本已替换（Havenotrouble, YOUR_REPO 等）
- [ ] GitHub 仓库链接已更新
- [ ] 下载链接指向正确的 GitHub Releases
- [ ] 元数据（SEO）已优化
- [ ] favicon 已添加（如果有）

## ✅ 功能测试

- [ ] 主页正常加载
- [ ] 所有动画效果正常
- [ ] 响应式设计在移动端正常
- [ ] 下载按钮功能正常
- [ ] API 端点可访问：
  - [ ] `/api/version` 返回正确数据
  - [ ] `/api/feedback` 接收反馈成功

## ✅ Vercel 配置

- [ ] Vercel 项目已创建
- [ ] 环境变量已设置：
  - [ ] `NEXT_PUBLIC_SITE_URL`
  - [ ] `GITHUB_USERNAME` (可选)
  - [ ] `GITHUB_REPO` (可选)
  - [ ] `GITHUB_TOKEN` (可选)
  - [ ] `DISCORD_WEBHOOK_URL` (可选)
- [ ] 自定义域名已配置（如果有）
- [ ] Vercel Analytics 已启用

## ✅ 性能检查

- [ ] 首次加载时间 < 3秒
- [ ] Lighthouse 性能得分 > 90
- [ ] 所有图片已优化
- [ ] 无控制台错误或警告

## ✅ 安全检查

- [ ] 没有硬编码的敏感信息
- [ ] `.env` 文件已添加到 `.gitignore`
- [ ] API 端点有适当的速率限制（建议配置）
- [ ] CORS 配置正确

## ✅ 文档检查

- [ ] README.md 完整且最新
- [ ] DEPLOYMENT.md 部署指南完整
- [ ] API 文档清晰
- [ ] 注释充分

## ✅ 备份与回滚

- [ ] 已有 Git 备份
- [ ] 了解 Vercel 回滚流程
- [ ] 已测试回滚功能

## 部署命令

所有检查通过后，执行以下命令部署：

```bash
# 方法一：使用 Vercel CLI
vercel --prod

# 方法二：推送到 GitHub（如已配置自动部署）
git push origin main
```

## 部署后验证

部署完成后，请验证：

- [ ] 生产环境网站可访问
- [ ] 所有功能正常工作
- [ ] API 端点可用
- [ ] 性能指标正常
- [ ] Analytics 数据开始收集

## 监控

部署后持续监控：

- Vercel Analytics - 访问数据
- Vercel Functions - API 调用
- 用户反馈 - 通过 feedback API

---

**最后检查日期**: _____________

**检查人**: _____________

**部署状态**: [ ] 准备就绪 [ ] 需要修复
