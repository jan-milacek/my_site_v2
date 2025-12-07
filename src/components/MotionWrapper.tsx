import React from "react";
import { motion } from "framer-motion"; 
import type { Variants, Transition, MotionProps } from "framer-motion";

interface MotionWrapperProps extends Omit<MotionProps, 'variants'> {
  children: React.ReactNode;
  delay?: number;
}

const defaultAnimations: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut",
    } as Transition,
  }),
};

export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={defaultAnimations}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}