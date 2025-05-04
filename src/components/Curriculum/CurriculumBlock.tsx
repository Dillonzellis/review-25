import { CurriculumLinksType } from "@/db/schema";
import getCurriculumLinks from "./getCurriculumLinks";

export default async function CurriculumBlock() {
  const links = await getCurriculumLinks();

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div>Curriculum Block</div>
      {links.map((link: CurriculumLinksType) => (
        <div key={link.id}>
          <div>id: {link.id}</div>
          <div>title: {link.title}</div>
          <div>link: {link.link}</div>
        </div>
      ))}
    </div>
  );
}
