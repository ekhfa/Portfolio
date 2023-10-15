import { projectSlugifyAll } from "./projectSlugify";
import type { CollectionEntry } from "astro:content";

const getProjectsByTag = (
  projects: CollectionEntry<"project">[],
  tag: string
) =>
  projects.filter(project =>
    projectSlugifyAll(project.data.tags).includes(tag)
  );

export default getProjectsByTag;
