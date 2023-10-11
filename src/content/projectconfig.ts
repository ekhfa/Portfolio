import { defineCollection } from "astro:content";
import { projectSchema } from "./_projectschemas";

const projects = defineCollection({
  schema: projectSchema,
});
