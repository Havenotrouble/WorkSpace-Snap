"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { FeatureCard } from "./components/FeatureCard";
import { WorkflowShowcase } from "./components/WorkflowShowcase";
import { DownloadButton } from "./components/DownloadButton";
import { APP_ICONS, FEATURES } from "./constants/data";
import { SPRING_CONFIGS, EASING, DURATIONS, DELAYS } from "./constants/animations";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring 动画平滑鼠标移动
  const smoothMouseX = useSpring(mouseX, SPRING_CONFIGS.smooth);
  const smoothMouseY = useSpring(mouseY, SPRING_CONFIGS.smooth);

  useEffect(() => {
    // 检测是否为桌面端
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    // 只在桌面端且不偏好减少动画时添加鼠标监听
    if (!prefersReducedMotion && isDesktop) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", checkDesktop);
      };
    }

    return () => window.removeEventListener("resize", checkDesktop);
  }, [mouseX, mouseY, prefersReducedMotion, isDesktop]);

  return (
    <div className="relative overflow-hidden">
      {/* 鼠标跟随光晕 - 仅在桌面端显示 */}
      <motion.div
        className="pointer-events-none fixed w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-30 hidden md:block"
        style={{
          left: smoothMouseX,
          top: smoothMouseY,
          background: "radial-gradient(circle, rgba(0, 120, 212, 0.3), transparent 70%)",
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* 背景光晕效果 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/20 rounded-full blur-[120px] -z-10" />

        <div className="max-w-5xl mx-auto text-center w-full">
          {/* 主标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: EASING.spring }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-gradient px-4">
              WorkSpace Snap
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              智能桌面工作空间快照与恢复工具
              <br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>
              一键捕获、整理和恢复你的工作会话
            </p>
          </motion.div>

          {/* 应用图标启动序列动画 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATIONS.normal, delay: DELAYS.long }}
            className="mb-8 md:mb-12 flex justify-center items-center gap-2 md:gap-3 flex-wrap max-w-sm md:max-w-md mx-auto px-4"
          >
            {APP_ICONS.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  ...SPRING_CONFIGS.bouncy,
                  delay: 0.5 + index * 0.08,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={cn(
                  "glass-card rounded-xl md:rounded-2xl p-2 md:p-3",
                  "w-12 h-12 md:w-14 md:h-14 flex items-center justify-center",
                  "cursor-pointer"
                )}
                title={app.name}
              >
                <app.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: app.color }} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, delay: 0.9, ease: EASING.spring }}
            className="flex gap-4 justify-center mb-6 md:mb-8 px-4"
          >
            <DownloadButton />
          </motion.div>

          {/* 版本提示 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATIONS.normal, delay: 1.1 }}
            className="text-white/40 text-xs md:text-sm mb-12 md:mb-16"
          >
            支持 Windows 10/11 • 完全免费
          </motion.p>

          {/* 功能卡片演示 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slower, delay: 1.2, ease: EASING.spring }}
            className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4"
          >
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                delay={1.3}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Section - 工作流展示 */}
      <WorkflowShowcase />
    </div>
  );
}
