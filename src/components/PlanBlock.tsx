import Link from "next/link";

type PlanBlockProps = {
  title: string;
  links: string[];
};

export function PlanBlock({ title, links }: PlanBlockProps) {
  return (
    <div>
      <h2>{title}</h2>
      {links.map((link) => (
        <ul>
          <li>
            <Link href="">{link}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

{
  /* <h2 className="text-2xl">Phase 1: FE</h2> */
}
{
  /* <ul> */
}
{
  /*   <ListItem href="/">React Advanced Concepts</ListItem> */
}
{
  /*   <ListItem href="/">TypeScript Mastery</ListItem> */
}
{
  /* </ul> */
}
