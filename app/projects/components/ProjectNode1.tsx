import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerVariant } from "../Projects";
import { ProjectType } from "@/types/projects";
import { FC } from "react";
import Link from "next/link";
import ProjectDetails from "@/lib/ProjectDetailsStore";
import { useStore } from "zustand";
const ProjectNode1: FC<ProjectType> = (props) => {
  const { site, imageUrl, title } = props;

  const { toggle, sendPayload } = useStore(ProjectDetails);

  const showMoreInfo = () => {
    document.documentElement.style.overflow = "hidden";
    sendPayload(props);
    toggle(true);
  };

  return (
    <motion.div
      variants={staggerVariant}
      whileInView={"shown"}
      initial="hidden"
      className="group flex flex-col col-start-1 col-span-2 md:col-start-1 md:col-span-1 h-[18rem] bg-neutral-500/20 rounded-lg relative outline outline-2 outline-neutral-500/20">
      <div className="relative rounded-t-lg  h-full overflow-hidden">
        <Image
          src={imageUrl}
          fetchPriority="high"
          loading="eager"
          priority
          fill
          alt=""
          className="select-none transition-all group-hover:scale-110 object-cover object-top"
        />
      </div>

      <div className="px-1 py-0.5">
        <p className="font-light text-lg mt-1">{title}</p>
        <div className="mt-2 gap-2 flex mb-1">
          <Button
            variant={"outline"}
            className="w-fit bg-transparent border-2 flex justify-center gap-1 items-center"
            onClick={showMoreInfo}>
            More Info
          </Button>
          {site ? (
            <Button asChild className="w-fit flex justify-center gap-1 items-center rounded-lg">
              <Link target="_blank" href={site}>
                Site
                <ArrowUpRight />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectNode1;
