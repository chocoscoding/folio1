import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerVariant } from "../Projects";
const ProjectNode1 = () => {
  return (
    <motion.div
      variants={staggerVariant}
      whileInView={"shown"}
      initial="hidden"
      className="group flex flex-col col-start-1 col-span-2 md:col-start-1 md:col-span-1 h-[18rem] bg-neutral-500/20 rounded-md relative p-1">
      <div className="relative rounded-md h-full overflow-hidden">
        <Image
          src={`/assets/oyeti-timileyin.png`}
          objectPosition="top"
          objectFit="cover"
          fill
          alt=""
          className="select-none transition-all group-hover:scale-110"
        />
      </div>
      <div className="mt-2 gap-2 flex mb-1">
        <Button variant={"outline"} className="w-full bg-transparent border-2 flex justify-center gap-1 items-center">
          Github <GitHubLogoIcon />
        </Button>
        <Button className="w-full flex justify-center gap-1 items-center">
          View Site
          <ArrowUpRight />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectNode1;
