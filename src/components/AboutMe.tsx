import React from "react";
import { aboutMe } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="py-8 bg-gradient-to-b from-background to-muted/20 scroll-mt-20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            👨‍💼 About Me
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Intro paragraphs */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-6">
              <div className="space-y-4">
                {aboutMe.intro.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex justify-center py-4">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </motion.div>

          {/* What Makes My Approach Different */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
              {aboutMe.differentiators.title}
            </h3>
          </motion.div>

          {/* Differentiator items */}
          {aboutMe.differentiators.items.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="p-6">
                <h4 className="text-lg font-medium mb-3 flex items-start">
                  <span className="mr-2 text-purple-500">▸</span>
                  {item.heading}
                </h4>
                <div className="space-y-3 ml-6">
                  {item.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}