"use client";
import ProjectNode from "./components/ProjectNode";
import { WorkShell } from "../experience/components/work-shell";
import { defaultVariants } from "@/components/motion.variants";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { FC } from "react";
import { ProjectType } from "@/types/projects";
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
const Projects: FC<{ data: ProjectType[] }> = (props) => {
  return (
    <>
      <WorkShell initial="hidden" animate="visible" variants={defaultVariants}>
        <AnimatePresence>
          <motion.div initial="hidden" animate="shown" exit="hidden" variants={staggerVariant} className="grid grid-cols-2 gap-5 ">
            {props.data.map((data, index) => {
              return <ProjectNode {...data} key={index} nodeType={(index + 1) % 2 === 0 ? "2" : "1"} />;
            })}
          </motion.div>
        </AnimatePresence>
      </WorkShell>
    </>
  );
};

export default Projects;
