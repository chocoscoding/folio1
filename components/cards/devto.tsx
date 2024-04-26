"use client";

import { defaultVariantsNoDelay } from "@/components/motion.variants";
import { motion } from "framer-motion";
import { FaDev } from "react-icons/fa6";
import Link from "next/link";

export function DevTo() {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={"https://dev.to/chocoscoding"}
      target="_blank"
      title="Dev.To profile"
      variants={defaultVariantsNoDelay}
      whileHover={{ scale: 1.05 }}
      className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl dark:border-white/5 dark:bg-neutral-900/75 text-white border-neutral-950 border-opacity-[0.03] bg-neutral-50/75 md:col-span-1 md:col-start-4 md:row-span-1 md:row-start-3">
      <FaDev size={24} />
    </MotionLink>
  );
}
