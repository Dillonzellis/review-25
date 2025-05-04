import getCurriculumLinks from "@/app/_serverActions/getCurriculumLinks";
import { CurriculumLinksType } from "@/db/schema";

export default async function CurriculumBlock() {
  const links = await getCurriculumLinks();

  return (
    <div>
      <div>Curr Block</div>
      {links.map((link: CurriculumLinksType) => (
        <div key={link.id}>{link.title}</div>
      ))}
    </div>
  );
}
