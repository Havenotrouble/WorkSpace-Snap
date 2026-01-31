import { LucideIcon } from "lucide-react";

// 应用图标类型
export interface AppIcon {
  name: string;
  icon: LucideIcon;
  color: string;
  position?: {
    x: number;
    y: number;
  };
  active?: boolean;
}

// 功能特性类型
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// 工作流步骤类型
export interface WorkflowStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  apps: AppIcon[];
}

// 动画配置类型
export interface SpringConfig {
  stiffness: number;
  damping: number;
  mass?: number;
}

export interface AnimationTransition {
  duration?: number;
  delay?: number;
  ease?: number[] | string;
  type?: "tween" | "spring" | "inertia";
  stiffness?: number;
  damping?: number;
}
