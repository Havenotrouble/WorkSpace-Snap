/**
 * 检测用户是否偏好减少动画
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * 获取安全的动画duration，如果用户偏好减少动画则返回0
 */
export function getSafeDuration(duration: number): number {
  return prefersReducedMotion() ? 0 : duration;
}

/**
 * 获取安全的动画delay，如果用户偏好减少动画则返回0
 */
export function getSafeDelay(delay: number): number {
  return prefersReducedMotion() ? 0 : delay;
}

/**
 * 节流函数
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
