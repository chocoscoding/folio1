import { experienceQuery, getProjects, projectsQuery } from "@/sanity/lib/queries";
import Projects from "./Projects";
import { sanityFetch } from "@/sanity/lib/fetch";
import { type SanityDocument } from "next-sanity";
import { ProjectType } from "@/types/projects";
import { Heading } from "@/components/heading";

const page = async () => {
  const fetchProjectsWithDelay = async () => {
    try {
      const projects = await getProjects();
      return projects;
    } catch (error) {
      return [];
    }
  };

  const allProjects: ProjectType[] = (await fetchProjectsWithDelay()) as ProjectType[];

  if (!getProjects) {
    //if something went wrong
    return <Heading>Oh Snap!, Something went wrong, Please try again</Heading>;
  }
  return (
    <>
      <Projects data={allProjects} />
    </>
  );
};

export default page;
