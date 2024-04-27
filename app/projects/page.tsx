import { experienceQuery } from "@/sanity/lib/queries";
import Projects from "./Projects";
import { sanityFetch } from "@/sanity/lib/fetch";
import { type SanityDocument } from "next-sanity";

const page = async () => {
  const getProjects = await sanityFetch<SanityDocument[]>({ query: experienceQuery });
  console.log(getProjects);
  return (
    <>
      <Projects />
    </>
  );
};

export default page;
