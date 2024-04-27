"use client";

import { bbt, freelance, hypercho, osl, type Job } from "@/app/experience/data";
import { defaultVariantsNoDelay } from "@/components/motion.variants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { ArrowDown, MoveDown } from "lucide-react";
import React from "react";

const jobs: Job[] = [bbt, hypercho, osl, freelance];

export function Jobs() {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.25,
              staggerChildren: 0.1,
            },
          },
        }}
        className="mt-16 flex flex-col items-center">
        {jobs.map((job, index) => (
          <React.Fragment key={job.company}>
            {index !== 0 && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, scaleY: 0 },
                  visible: {
                    opacity: 1,
                    scaleY: 1,
                    transition: {
                      delay: 0.65,
                      duration: 0.5,
                    },
                  },
                }}
                className="z-[-1] mt-[9px] h-6 w-px origin-top bg-neutral-200 dark:bg-neutral-500/20"
              />
            )}
            <JobCard job={job} index={index} />
          </React.Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

type JobCardProps = {
  job: Job;
  index: number;
} & MotionProps;
export function JobCard({ job, index, ...props }: JobCardProps) {
  const [open, setOpen] = React.useState(false);
  const currentJob = index === 0;
  return (
    <motion.div
      variants={defaultVariantsNoDelay}
      className={cn(
        "card-border relative w-full flex flex-col rounded-xl bg-white p-6 py-8 transition-colors duration-200 ease-in-out dark:bg-neutral-900",
        {
          "ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-500/20 dark:ring-offset-neutral-950": currentJob,
        }
      )}>
      <h2 className="m-0 mb-1 flex justify-between text-xl font-normal dark:text-white">
        {job.company}{" "}
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {job.from} — {job.to}
        </span>
      </h2>
      <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">{job.position}</p>
      <p className="mb-0 mt-4">{job.introDescription}</p>

      <p
        className={cn("m-0 hidden transition duration-300", {
          block: open,
        })}>
        {job.description}
      </p>
    </motion.div>
  );
}
