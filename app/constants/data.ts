import {
  Code2,
  Chrome,
  FileText,
  Figma,
  MessageSquare,
  Layers,
  Sparkles,
  Zap,
  Download,
} from "lucide-react";
import { AppIcon, Feature, WorkflowStep } from "@/app/types";

// 应用图标数据
export const APP_ICONS: AppIcon[] = [
  { name: "VS Code", icon: Code2, color: "#007ACC" },
  { name: "Chrome", icon: Chrome, color: "#4285F4" },
  { name: "Notion", icon: FileText, color: "#ffffff" },
  { name: "Figma", icon: Figma, color: "#F24E1E" },
  { name: "Slack", icon: MessageSquare, color: "#E01E5A" },
  { name: "Layers", icon: Layers, color: "#00D4FF" },
];

// 功能特性数据
export const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "智能扫描",
    description:
      "自动检测并捕获所有正在运行的应用程序及其状态，无需手动配置。",
  },
  {
    icon: Zap,
    title: "一键启动",
    description:
      "只需单击一下，即可瞬间恢复整个工作空间，提升工作效率。",
  },
  {
    icon: Download,
    title: "智能分类",
    description:
      "按项目、任务或任何自定义类别组织工作空间，轻松管理。",
  },
];

// 工作流步骤数据
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 0,
    title: "Snap",
    subtitle: "快照捕获",
    description: "一键捕获当前所有运行中的应用程序及其窗口位置",
    icon: Sparkles,
    apps: [
      { name: "VS Code", icon: Code2, color: "#007ACC", position: { x: 0, y: 0 } },
      { name: "Chrome", icon: Chrome, color: "#4285F4", position: { x: 1, y: 0 } },
      { name: "Figma", icon: Figma, color: "#F24E1E", position: { x: 0, y: 1 } },
      { name: "Slack", icon: MessageSquare, color: "#E01E5A", position: { x: 1, y: 1 } },
    ],
  },
  {
    id: 1,
    title: "Sort",
    subtitle: "智能整理",
    description: "按项目、任务或自定义类别自动分类你的工作空间",
    icon: Layers,
    apps: [
      { name: "开发", icon: Code2, color: "#007ACC", position: { x: 0, y: 0 } },
      { name: "设计", icon: Figma, color: "#F24E1E", position: { x: 1, y: 0 } },
      { name: "文档", icon: FileText, color: "#ffffff", position: { x: 0, y: 1 } },
      { name: "沟通", icon: MessageSquare, color: "#E01E5A", position: { x: 1, y: 1 } },
    ],
  },
  {
    id: 2,
    title: "Launch",
    subtitle: "快速启动",
    description: "选择任意工作空间，一键恢复所有应用到精确位置",
    icon: Zap,
    apps: [
      { name: "VS Code", icon: Code2, color: "#007ACC", position: { x: 0, y: 0 }, active: true },
      { name: "Chrome", icon: Chrome, color: "#4285F4", position: { x: 1, y: 0 }, active: true },
      { name: "Figma", icon: Figma, color: "#F24E1E", position: { x: 0, y: 1 }, active: true },
      { name: "Slack", icon: MessageSquare, color: "#E01E5A", position: { x: 1, y: 1 }, active: true },
    ],
  },
];
