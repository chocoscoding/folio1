import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerVariant } from "../Projects";
import { FC } from "react";
import { ProjectType } from "@/types/projects";
const ProjectNode2: FC<ProjectType> = ({ github, site, imageUrl }) => {
  return (
    <motion.div
      variants={staggerVariant}
      whileInView={"shown"}
      initial="hidden"
      className="group flex flex-col col-start-1 col-span-2 md:col-start-2 md:col-span-1 h-[18rem] bg-neutral-500/20 rounded-md relative p-1">
      <div className="relative rounded-md h-full overflow-hidden">
        <Image
          src={imageUrl}
          className="select-none transition-all group-hover:scale-110 object-cover object-top"
          fill
          loading="eager"
          priority
          alt="image"
        />
      </div>
      <div className="mt-2 gap-2 flex mb-1">
        {github ? (
          <Button asChild variant={"outline"} className="w-full bg-transparent border-2 flex justify-center gap-1 items-center">
            <Link target="_blank" href={github}>
              Github <GitHubLogoIcon />
            </Link>
          </Button>
        ) : null}
        {site ? (
          <Button asChild className="w-full flex justify-center gap-1 items-center">
            <Link target="_blank" href={site}>
              View Site
              <ArrowUpRight />
            </Link>
          </Button>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectNode2;
