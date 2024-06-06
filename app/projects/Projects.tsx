"use client";
import ProjectNode1 from "./components/ProjectNode1";
import ProjectNode2 from "./components/ProjectNode2";
import { WorkShell } from "../experience/components/work-shell";
import { defaultVariants } from "@/components/motion.variants";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { Heading } from "@/components/heading";
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
              if ((index + 1) % 2 === 0) {
                //even no
                return <ProjectNode2 {...data} key={index} />;
              }
              //odd no
              return <ProjectNode1 {...data} key={index} />;
            })}
          </motion.div>
        </AnimatePresence>
      </WorkShell>
    </>
  );
};

export default Projects;
