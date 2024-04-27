import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerVariant } from "../Projects";
const ProjectNode2 = () => {
  return (
    <motion.div
      variants={staggerVariant}
      whileInView={"shown"}
      initial="hidden"
      className="group flex flex-col col-start-1 col-span-2 md:col-start-2 md:col-span-1 h-[18rem] bg-neutral-500/20 rounded-md relative p-1">
      <div className="relative rounded-md h-full overflow-hidden">
        <Image
          src={`/assets/oyeti-timileyin.png`}
          className="select-none transition-all group-hover:scale-110"
          objectPosition="top"
          objectFit="cover"
          fill
          alt=""
        />
      </div>
      <div className="mt-2 gap-2 flex mb-1">
        <Button asChild variant={"outline"} className="w-full bg-transparent border-2 flex justify-center gap-1 items-center">
          <Link target="_blank" href={"https://github.com"}>
            Github <GitHubLogoIcon />
          </Link>
        </Button>
        <Button className="w-full flex justify-center gap-1 items-center">
          View Site
          <ArrowUpRight />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectNode2;
