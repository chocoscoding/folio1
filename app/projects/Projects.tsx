"use client";
import ProjectNode1 from "./components/ProjectNode1";
import ProjectNode2 from "./components/ProjectNode2";
import { WorkShell } from "../experience/components/work-shell";
import { defaultVariants } from "@/components/motion.variants";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { Heading } from "@/components/heading";

export const staggerVariant = {
  hidden: { opacity: 0, y: 30 },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
  leave: { opacity: 0, y: -30 },
};
const Projects = () => {
  return (
    <>
      <Heading className="mb-1 mt-0">My Projects</Heading>
      <p className="mb-6 mt-6">I am too shy to show you everything... 🫣</p>
      <WorkShell initial="hidden" animate="visible" variants={defaultVariants}>
        <AnimatePresence>
          <motion.div initial="hidden" animate="shown" exit="hidden" variants={staggerVariant} className="grid grid-cols-2 gap-3 ">
            {Array(20)
              .fill(0)
              .map((_, index) => {
                if ((index + 1) % 2 === 0) {
                  //even no
                  return <ProjectNode2 key={index} />;
                }
                //odd no
                return <ProjectNode1 key={index} />;
              })}
          </motion.div>
        </AnimatePresence>
      </WorkShell>
    </>
  );
};

export default Projects;
