import React from "react";
import { contactInfo } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { Mail, Linkedin, Github, MapPin, Globe } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            💬 Let's Discuss Your Analytics Challenge
          </h2>
          <p className="text-muted-foreground mb-8 text-center md:text-left leading-relaxed">
            {contactInfo.description}
          </p>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Get In Touch Card */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="h-5 w-5 mr-3 text-purple-500 group-hover:text-pink-500 transition-colors" />
                  <div>
                    <span className="font-medium">Email:</span>{" "}
                    <span className="group-hover:underline">{contactInfo.email}</span>
                  </div>
                </motion.a>

                <motion.a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Linkedin className="h-5 w-5 mr-3 text-purple-500 group-hover:text-pink-500 transition-colors" />
                  <div>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <span className="group-hover:underline">linkedin.com/in/milacek</span>
                  </div>
                </motion.a>

                <motion.a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <Github className="h-5 w-5 mr-3 text-purple-500 group-hover:text-pink-500 transition-colors" />
                  <div>
                    <span className="font-medium">GitHub:</span>{" "}
                    <span className="group-hover:underline">github.com/jan-milacek</span>
                  </div>
                </motion.a>

                <motion.div className="pt-4 border-t border-purple-500/20">
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <span className="font-medium">Location:</span> {contactInfo.location}
                    </div>
                  </div>

                  <div className="flex items-center text-muted-foreground">
                    <Globe className="h-5 w-5 mr-3 text-purple-500" />
                    <div>
                      <span className="font-medium">Available for:</span> {contactInfo.availability}
                    </div>
                  </div>
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>

          {/* What to Expect Card */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
                What to Expect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {contactInfo.expectation}
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}