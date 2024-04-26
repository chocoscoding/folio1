import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemaTypes/blockContent";
import category from "./schemaTypes/category";
import post from "./schemaTypes/post";
import experiences from "./schemaTypes/experiences";
import project from "./schemaTypes/project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, experiences, category, blockContent, project],
};
