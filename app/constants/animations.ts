import { SpringConfig, AnimationTransition } from "@/app/types";

// Spring 动画配置
export const SPRING_CONFIGS: Record<string, SpringConfig> = {
  smooth: { stiffness: 150, damping: 20 },
  bouncy: { stiffness: 260, damping: 20 },
  gentle: { stiffness: 100, damping: 30 },
  stiff: { stiffness: 400, damping: 30 },
};

// 缓动曲线
export const EASING = {
  spring: [0.34, 1.56, 0.64, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
};

// 常用动画时长
export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.8,
} as const;

// 常用延迟时间
export const DELAYS = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.4,
} as const;

// 预定义动画变体
export const fadeInUp: AnimationTransition = {
  duration: DURATIONS.slow,
  ease: EASING.spring,
};

export const scaleIn: AnimationTransition = {
  type: "spring",
  stiffness: SPRING_CONFIGS.bouncy.stiffness,
  damping: SPRING_CONFIGS.bouncy.damping,
};

// 滚动动画默认配置
export const SCROLL_ANIMATION_MARGIN = "-100px";
