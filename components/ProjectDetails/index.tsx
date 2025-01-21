"use client";

import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useStore } from "zustand";
import ProjectDetails from "@/lib/ProjectDetailsStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { PortableText } from "@portabletext/react";

const sectionVariant = {
  hidden: { opacity: 0 },
  shown: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: {
      delay: 0.25,
    },
  },
};
const mainVariant = {
  hidden: { opacity: 0, y: 30 },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeIn",
    },
  },
  leave: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
    },
  },
};

const Index = () => {
  const { toggle, show, payload, sendPayload } = useStore(ProjectDetails);

  if (!payload) return null;

  const hideMoreInfo = () => {
    document.documentElement.style.overflow = "auto";
    toggle(false);
    sendPayload(null);
  };

  const { site, github, imageUrl, title, description, techStack, otherImages } = payload;

  return (
    <>
      <AnimatePresence mode="wait">
        {show ? (
          <motion.div
            initial="hidden"
            animate="shown"
            exit="leave"
            variants={sectionVariant}
            className="w-full h-full fixed top-0 left-0 bd-blur-xl bg-transparent z-[1000] flex flex-col items-center overflow-y-auto ">
            <button
              className="rounded-full bg-white/10 bd-blur p-2 mt-[20px] mb-[1.5%] outline outline-2 outline-neutral-600"
              onClick={hideMoreInfo}>
              <IoClose size={25} opacity={50} />
            </button>

            <motion.div initial="hidden" animate="shown" exit="leave" variants={mainVariant} className="w-[90%] max-w-[1000px] mb-2">
              <section className="w-full  bg-white/95 outline outline-2 outline-neutral-500/20 rounded-lg p-2">
                <Swiper
                  className="rounded-lg"
                  // install Swiper modules
                  modules={[Pagination]}
                  spaceBetween={10}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 1.6,
                      spaceBetween: 5,
                    },
                  }}
                  pagination={{ clickable: true }}>
                  {[imageUrl, ...otherImages].map((image, i) => (
                    <SwiperSlide key={"sliderImage" + i}>
                      <div className="w-auto max-w-[650px] aspect-video rounded-lg border border-neutral-700 overflow-hidden">
                        <Image
                          src={image}
                          loading="lazy"
                          width={1280}
                          height={720}
                          objectFit="contain"
                          fetchPriority="high"
                          alt={"sliderImage" + i}
                          className="w-full h-full select-none transition-all group-hover:scale-110 object-cover object-top"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* curousel */}

                <h1 className="text-xl text-black font-medium my-3">{title}</h1>

                <div className=" text-black/70 mb-2 mt-1">
                  <PortableText value={description} />
                </div>

                <div className="flex flex-wrap my-5 gap-2.5">
                  {(techStack || []).map((tech, i) => (
                    <p key={"techStack" + i} className="px-2 py-1 outline outline-2 outline-black rounded-full text-sm text-black">
                      {tech}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {github ? (
                    <Button
                      asChild
                      variant={"outline"}
                      className="w-full min-w-[130px] max-w-[160px] h-10 border-2 flex justify-center gap-1 items-center rounded-lg outline outline-2 outline-white/95 hover:bg-white hover:outline-neutral-900 hover:text-neutral-900 transition-all">
                      <Link target="_blank" href={github}>
                        Github Repo
                        <GitHubLogoIcon />
                      </Link>
                    </Button>
                  ) : null}
                  {site ? (
                    <Button
                      asChild
                      className="w-full h-10 min-w-[130px] max-w-[160px] flex justify-center gap-1 items-center rounded-lg outline outline-2 outline-neutral-900 hover:text-white hover:bg-neutral-900 transition-all">
                      <Link target="_blank" href={site}>
                        Go to website
                        <ArrowUpRight />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </section>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Index;
