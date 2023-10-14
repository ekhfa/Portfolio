import Datetime from "./Datetime";
import type { ProjectFrontmatter } from "@content/_projectschemas";

export interface Props {
  href?: string;
  frontmatter: ProjectFrontmatter;
  secHeading?: boolean;
}

export default function ProjectCard({
  href,
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, description } = frontmatter;

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">
            {title}
          </h3>
        )}
      </a>
      <Datetime datetime={pubDatetime} />
      <p>{description}</p>
    </li>
  );
}