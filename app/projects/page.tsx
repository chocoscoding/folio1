import { experienceQuery, getProjects, projectsQuery } from "@/sanity/lib/queries";
import Projects from "./Projects";
import { sanityFetch } from "@/sanity/lib/fetch";
import { type SanityDocument } from "next-sanity";
import { ProjectType } from "@/types/projects";
import { Heading } from "@/components/heading";

const page = async () => {
  const fetchProjectsWithDelay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const projects = await getProjects();
          resolve(projects);
        } catch (error) {
          reject(error);
        }
      }, 5000); // Delay of 5 seconds
    });
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
