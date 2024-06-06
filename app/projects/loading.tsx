import { FC } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/types/projects";

export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-5 ">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            key={"skeleton" + i}
            className="group flex flex-col h-[18rem] bg-neutral-500/20 rounded-lg relative outline outline-2 outline-neutral-500/20 animate-pulse">
            <div className="relative rounded-t-lg h-full overflow-hidden">
              {/* Skeleton for image */}
              <div className="animate-pulse w-full h-48 bg-neutral-600"></div>
            </div>

            <div className="px-1 py-0.5">
              {/* Skeleton for title */}
              <div className="h-4 bg-neutral-600 rounded w-5/6"></div>
              <div className="mt-2 gap-2 flex mb-1">
                {/* Skeleton for buttons */}
                <div className="flex justify-center gap-1 items-center bg-neutral-600 h-8 w-24 rounded"></div>
                <div className="flex justify-center gap-1 items-center bg-neutral-600 h-8 w-24 rounded"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
