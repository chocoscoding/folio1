"use client";

import { defaultVariantsNoDelay } from "@/components/motion.variants";
import { motion } from "framer-motion";
import { TbFileCv } from "react-icons/tb";
import Link from "next/link";

export function CV() {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={"https://flowcv.com/resume/2loepv9r6t"}
      target="_blank"
      title="cv"
      variants={defaultVariantsNoDelay}
      whileHover={{ scale: 1.05 }}
      className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-none text-white dark:bg-none outline outline-1 md:col-span-1 md:col-start-5 md:row-span-1 md:row-start-3">
      <TbFileCv size={40} />
    </MotionLink>
  );
}
