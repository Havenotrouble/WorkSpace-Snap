# 如何创建 GitHub Release 并上传 exe 文件

本指南将帮助你创建 GitHub Release 并上传可分发的 exe 文件。

## 方法一：通过 GitHub 网页界面（推荐）

### 1. 访问 Releases 页面

访问：https://github.com/Havenotrouble/WorkSpace-Snap/releases

或者：
1. 打开仓库主页
2. 点击右侧的 "Releases"（如果没有，点击 "Create a new release"）

### 2. 创建新 Release

1. 点击 "Draft a new release" 按钮
2. 填写 Release 信息：

**Tag version（必填）**
```
v1.0.0
```
建议使用语义化版本号，如 v1.0.0, v1.1.0, v2.0.0

**Release title（发布标题）**
```
WorkSpace Snap v1.0.0 - 首次发布
```

**Description（发布说明）**
```markdown
## 🎉 WorkSpace Snap v1.0.0

WorkSpace Snap 首次正式发布！智能桌面工作空间快照与恢复工具。

### ✨ 主要功能

- 🔍 **智能扫描** - 自动检测并捕获所有正在运行的应用程序及其状态
- ⚡ **一键启动** - 只需单击一下，即可瞬间恢复整个工作空间
- 📁 **智能分类** - 按项目、任务或自定义类别组织工作空间
- 💾 **状态保存** - 保存应用窗口位置、大小和屏幕分布

### 📋 系统要求

- Windows 10 (Build 19041) 或更高版本
- Windows 11（推荐）
- .NET Framework 4.8 或更高版本

### 📥 安装说明

1. 下载下方的 `WorkSpaceSnap-Setup.exe`
2. 双击运行安装程序
3. 按照安装向导完成安装
4. 首次运行会创建桌面快捷方式

### 🐛 已知问题

无

### 🔄 更新日志

- 🎉 首次发布
- ✨ 实现智能扫描功能
- ⚡ 实现一键启动功能
- 📁 实现智能分类功能

### 📝 注意事项

- 首次使用建议创建测试工作空间以熟悉功能
- 部分应用可能需要管理员权限才能完整捕获状态

---

**官方网站**: https://workspace-snap.vercel.app（部署后更新）
**问题反馈**: https://github.com/Havenotrouble/WorkSpace-Snap/issues
```

### 3. 上传 exe 文件

在 "Attach binaries" 区域：

1. 点击或拖拽你的 exe 文件到上传区域
2. 文件名建议：`WorkSpaceSnap-Setup.exe`
3. 等待上传完成（显示绿色对勾）

**重要**：确保文件名为 `WorkSpaceSnap-Setup.exe`，因为网站的下载链接已经配置为这个名称。

### 4. 发布 Release

1. 确认所有信息填写正确
2. 勾选 "Set as the latest release"
3. 点击 "Publish release" 按钮

## 方法二：使用 GitHub CLI（高级用户）

如果你安装了 GitHub CLI (gh)：

```bash
# 1. 创建 release
gh release create v1.0.0 \
  --title "WorkSpace Snap v1.0.0 - 首次发布" \
  --notes "首次正式发布" \
  WorkSpaceSnap-Setup.exe

# 2. 或者如果 release 已存在，上传文件
gh release upload v1.0.0 WorkSpaceSnap-Setup.exe
```

## 验证 Release

创建成功后，访问下面的链接验证：

**Release 页面**:
https://github.com/Havenotrouble/WorkSpace-Snap/releases/latest

**直接下载链接**:
https://github.com/Havenotrouble/WorkSpace-Snap/releases/latest/download/WorkSpaceSnap-Setup.exe

## 更新网站

Release 创建后，网站会自动使用这个下载链接。你可以：

1. 访问本地开发服务器测试：http://localhost:3000
2. 点击 "下载 Windows 版本" 按钮
3. 应该会跳转到 GitHub Release 下载页面

## 后续版本发布

当你要发布新版本时：

1. 更新版本号（如 v1.1.0）
2. 更新 release notes
3. 上传新的 exe 文件
4. 网站会自动获取最新版本（因为使用了 `/releases/latest`）

## 自动化发布（可选）

你可以配置 GitHub Actions 来自动化发布流程，每次推送 tag 时自动创建 release：

创建 `.github/workflows/release.yml`：

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build
        run: |
          # 你的构建命令

      - name: Create Release
        uses: softprops/action-gh-release@v1
        with:
          files: WorkSpaceSnap-Setup.exe
          generate_release_notes: true
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## 需要帮助？

如果遇到问题：
- 查看 [GitHub Releases 文档](https://docs.github.com/en/repositories/releasing-projects-on-github)
- 提交 Issue：https://github.com/Havenotrouble/WorkSpace-Snap/issues
