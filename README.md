# WorkSpace Snap Web

WorkSpace Snap 官方网站 - 智能桌面工作空间快照与恢复工具

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **图标**: Lucide React

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

访问 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
app/
├── components/          # React 组件
│   ├── FeatureCard.tsx
│   └── WorkflowShowcase.tsx
├── constants/          # 常量配置
│   ├── animations.ts   # 动画配置
│   └── data.ts        # 数据常量
├── hooks/             # 自定义 Hooks
│   └── useReducedMotion.ts
├── types/             # TypeScript 类型定义
│   └── index.ts
├── globals.css        # 全局样式
├── layout.tsx         # 根布局
└── page.tsx           # 首页

utils/
├── animations.ts      # 动画工具函数
└── cn.ts             # 样式合并工具
```

## 设计规范

### 视觉风格
- Windows 11 Fluent Design
- Mica 云母质感
- 深色主题 (#050505)
- 强调色: #0078D4 (Windows Blue)

### 动画原则
- 使用 Spring 物理动画（弹性质感）
- 避免线性动画
- 支持 `prefers-reduced-motion`
- 响应时间 < 100ms

### 响应式断点
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- 4K: > 1920px

## API 端点

项目提供以下 API 端点：

### GET /api/version
获取最新版本信息

**响应示例：**
```json
{
  "version": "1.0.0",
  "releaseDate": "2026-01-29T16:00:00.000Z",
  "downloadUrl": "https://github.com/Havenotrouble/workspace-snap/releases/latest/download/WorkSpaceSnap-Setup.exe",
  "changelog": [
    "🎉 首次发布",
    "✨ 智能扫描和捕获应用程序",
    "⚡ 一键启动工作空间",
    "📁 智能分类管理"
  ],
  "minWindowsVersion": "Windows 10 (Build 19041)"
}
```

### POST /api/feedback
提交用户反馈

**请求示例：**
```json
{
  "email": "user@example.com",
  "message": "功能建议或问题反馈",
  "type": "feature" // 可选值: "bug", "feature", "other"
}
```

**响应示例：**
```json
{
  "success": true,
  "message": "Thank you for your feedback!"
}
```

## 性能优化

- ✅ 代码分割（组件级）
- ✅ 响应式图片
- ✅ 动画性能优化
- ✅ Reduce Motion 支持
- ✅ TypeScript 类型安全

## 部署

推荐使用 [Vercel](https://vercel.com/) 进行部署：

```bash
# 使用 Vercel CLI
vercel --prod
```

## License

MIT
