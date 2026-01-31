"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { WORKFLOW_STEPS } from "@/app/constants/data";
import { EASING } from "@/app/constants/animations";

export function WorkflowShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = WORKFLOW_STEPS[activeStep];

  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            工作流程
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            三步轻松管理你的工作空间
          </p>
        </motion.div>

        {/* 步骤切换器 */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12 flex-wrap px-2">
          {WORKFLOW_STEPS.map((step, index) => (
            <motion.button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={cn(
                "glass-card rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3",
                "transition-all duration-300",
                activeStep === index
                  ? "bg-accent/20 border-accent/40 scale-105"
                  : "hover:bg-white/10"
              )}
              whileHover={{ scale: activeStep === index ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <step.icon
                className={cn(
                  "w-4 h-4 md:w-5 md:h-5 transition-colors",
                  activeStep === index ? "text-accent" : "text-white/60"
                )}
              />
              <div className="text-left">
                <div
                  className={cn(
                    "font-semibold text-xs md:text-sm transition-colors",
                    activeStep === index ? "text-white" : "text-white/80"
                  )}
                >
                  {step.title}
                </div>
                <div className="text-xs text-white/50 hidden sm:block">
                  {step.subtitle}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* 工作流可视化区域 */}
        <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 min-h-[350px] md:min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* 左侧：描述 */}
            <motion.div
              key={`desc-${activeStep}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASING.spring }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 glass-card rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
                  <span className="text-accent font-mono text-xs md:text-sm">
                    步骤 {activeStep + 1}/3
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
                  {currentStep.subtitle}
                </h3>
                <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">
                  {currentStep.description}
                </p>
              </div>
            </motion.div>

            {/* 右侧：应用网格可视化 */}
            <motion.div
              key={`apps-${activeStep}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASING.spring }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {currentStep.apps.map((app, index) => (
                <motion.div
                  key={`${activeStep}-${app.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: app.active !== undefined ? (app.active ? 1 : 0.3) : 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: EASING.spring,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={cn(
                    "glass-card rounded-xl md:rounded-2xl p-4 md:p-6",
                    "flex flex-col items-center justify-center",
                    "min-h-[100px] md:min-h-[120px] cursor-pointer transition-all duration-300",
                    app.active && "ring-2 ring-accent/50"
                  )}
                >
                  <app.icon
                    className="w-8 h-8 md:w-10 md:h-10 mb-2 md:mb-3"
                    style={{ color: app.color }}
                  />
                  <span className="text-xs md:text-sm font-medium text-white/80 text-center">
                    {app.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 进度指示器 */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {WORKFLOW_STEPS.map((_, index) => (
            <motion.div
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                activeStep === index
                  ? "w-8 bg-accent"
                  : "w-1 bg-white/20 hover:bg-white/40 cursor-pointer"
              )}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
