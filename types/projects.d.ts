import { TypedObject } from "sanity";

export type ProjectType = {
  title: string;
  github: string | null;
  site: string | null;
  imageUrl: string;
  order: number;
  techStack: Array<string>;
  otherImages: Array<string>;
  description: TypedObject;
  nodeType: '1'|'2'; //node type
};
