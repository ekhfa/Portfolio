import { slug as slugger } from "github-slugger";
import type { ProjectFrontmatter } from "@content/_schemas";

export const projectSlugifyStr = (str: string) => slugger(str);

const projectSlugify = (project: ProjectFrontmatter) =>
  project.projectSlug ? slugger(project.projectSlug) : slugger(project.title);

export const projectSlugifyAll = (arr: string[]) =>
  arr.map(str => projectSlugifyStr(str));

export default projectSlugify;
