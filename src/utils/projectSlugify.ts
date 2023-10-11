import { slug as slugger } from "github-slugger";
import type { ProjectFrontmatter } from "@content/_projectschemas";

export const slugifyStr = (str: string) => slugger(str);

const projectSlugify = (project: ProjectFrontmatter) =>
  project.projectSlug ? slugger(project.projectSlug) : slugger(project.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default projectSlugify;
