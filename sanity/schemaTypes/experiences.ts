import { defineField, defineType } from "sanity";

export default defineType({
  name: "experiences",
  title: "experiences",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "breif",
      title: "Breif",
      type: "string",
    }),
    defineField({
      name: "more",
      title: "More",
      type: "blockContent",
    }),
    defineField({
      name: "startAt",
      title: "Start",
      type: "string",
    }),
    defineField({
      name: "site",
      title: "Site",
      type: "url",
    }),
    defineField({
      name: "endAt",
      title: "End",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "company",
    },
  },
});
