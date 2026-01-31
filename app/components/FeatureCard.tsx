"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { SCROLL_ANIMATION_MARGIN } from "@/app/constants/animations";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  delay?: number;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  delay = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: SCROLL_ANIMATION_MARGIN }}
      transition={{
        duration: 0.5,
        delay: delay + index * 0.1,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={cn(
        "glass-card rounded-xl md:rounded-2xl p-4 md:p-6",
        "cursor-pointer transition-all duration-300",
        "group relative overflow-hidden",
        className
      )}
    >
      {/* 悬浮时的光晕效果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
      </div>

      {/* 图标容器 */}
      <motion.div
        className="relative mb-3 md:mb-4 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/20 flex items-center justify-center"
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
      </motion.div>

      {/* 内容 */}
      <div className="relative">
        <h3 className="text-lg md:text-xl font-semibold mb-1.5 md:mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-white/60 text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>

      {/* 边框光效 */}
      <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-accent/30" />
      </div>
    </motion.div>
  );
}
