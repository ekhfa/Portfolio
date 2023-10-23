import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, ogImage } = frontmatter;
  return (
    <div className="grid grid-cols-9 gap-6 py-3">
      <a className="col-span-4" href={href}>
        <img alt="" decoding="async" loading="lazy" src={ogImage} />
      </a>
      <div className="col-span-5">
        <a
          className="font-small inline-block text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
          href={href}
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

        <p>{description}</p>
      </div>
    </div>
  );
}
