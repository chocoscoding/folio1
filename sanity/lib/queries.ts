import { groq } from "next-sanity";
import { client } from "./client";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, description, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get a all experience
export const experienceQuery = groq`*[_type == 'experiences']{
    startAt,
    endAt,
    breif,
    slug,
    site,
    order,
    company
  }`;

// Get a all experience
export const projectsQuery = groq`*[_type == 'project'] | order(order desc) {
  github,
  "imageUrl": mainImage.asset->url,
  site,
  order,
}`;

export async function getProjects() {
  return client.fetch(
    groq`*[_type == 'project'] | order(order asc) {
      title,
      github,
      "imageUrl": mainImage.asset->url,
      site,
      order,
      techStack,
      description,
      "otherImages": coalesce(images[].asset->url, [])
    }`
  );
}
