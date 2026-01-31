# WorkSpace Snap Web 落地指南

## 1. 核心视觉规范 (Visual Identity)
- **风格**: Windows 11 Fluent Design / Mica 效果。
- **色彩**: 
  - 背景: 深色 (#050505)，配合低饱和度的光晕 (Blur Gradients)。
  - 强调色: #0078D4 (Win11 Blue)，用于 CTA 和关键状态。
- **质感**: 大量使用 `backdrop-blur` (毛玻璃) 和 `border-white/10` (微光边框)。

## 2. UI 组件增强要求
### A. 功能卡片 (Feature Grid)
- **要求**: 每个功能点（智能扫描、一键启动等）需配备一个微动效。
- **交互**: 悬浮时，卡片背景色应从 `bg-white/5` 渐变为 `bg-white/10`，边框颜色加深。

### B. 工作流展示 (Workflow Showcase)
- **逻辑**: 使用“时间轴”或“左右对比”布局。
- **动效**: 模拟点击一个按钮后，下方列表中的应用图标（如 VSCode, Chrome）依次由暗变亮并伴随缩放动画。

## 3. 技术约束
- **框架**: Next.js 14 (App Router) + TypeScript。
- **动画库**: 必须使用 Framer Motion，追求 Spring (弹簧) 物理质感，避免死板的 Linear 动画。
- **图标库**: Lucide React。
- **响应式**: 必须适配移动端，移动端下卡片自动堆叠。

## 4. 落地细节提示 (Specific Implementation)
- 按钮 (CTA): 增加一个 `shiny` 效果（光影扫过）。
- 字体: 优先使用 'Inter', 'Segoe UI', system-ui。
交互哲学: 遵循“响应迅速、平滑缓冲”原则。所有点击反馈延迟需低于 100ms。禁止使用过于夸张的旋转或长距离位移，保持生产力工具的克制感。

## 5. 开发任务分阶段执行指南 (Phased Implementation)

请 Claude 按照以下顺序逐步执行任务，每完成一步请确认效果后再继续：

### 阶段一：基础架构与视觉基调 (Infrastructure)
1.  **环境配置**: 初始化 Next.js 项目，安装 `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`。
2.  **全局样式**: 在 `globals.css` 中定义 Mica (云母) 质感背景色和 `glass-card` 通用类。
3.  **布局组件**: 创建包含 SEO 优化的 `layout.tsx`。

### 阶段二：首屏开发 (Hero Section)
1.  **静态布局**: 编写大标题、副标题和下载按钮。
2.  **交互增强**: 使用 Framer Motion 实现应用图标“依次跳出”的启动序列动画。
3.  **光效**: 添加跟随鼠标移动的微弱光晕效果（Optional）。

### 阶段三：功能矩阵与工作流 (Features & Workflow)
1.  **卡片组件**: 编写响应式的 `FeatureCard`。
2.  **动态展示**: 实现“Snap -> Sort -> Launch”的步骤切换器，点击不同步骤时，中央的预览图要有平滑切换动效。

### 阶段四：落地细节与发布优化 (Final Polish)
1.  **响应式检查**: 确保在手机端和 4K 屏幕上表现一致。
2.  **性能优化**: 使用 Next/Image 优化资源，确保 Framer Motion 动画在低端设备也流畅。
3.  **代码清理**: 提取公共组件，确保 TypeScript 类型全覆盖。

### 阶段五：后端逻辑与部署 (Deployment & Backend)
1. **API 路由**: 
   - 在 `app/api/` 下创建一个版本检查接口 `version/route.ts`。
   - 实现一个简单的反馈收集接口，利用 Vercel Serverless Functions 处理请求。
2. **资源重定向**: 
   - 官网下载按钮不要直接链接到本地文件，请配置指向 GitHub Releases 的外部链接。
   - 确保 `next.config.mjs` 中正确配置了远程图片的域（如果需要加载外部图标）。
3. **Vercel 上线**:
   - 自动配置 Vercel 生产环境环境变量。
   - 开启 Vercel Analytics 以监控官网流量和下载点击率。
