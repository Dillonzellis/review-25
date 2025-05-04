import "dotenv/config";
import { db } from "./client";
import { CurriculumLinks, CurriculumLinksType } from "./schema";

const CurriculumLinksSeedData: CurriculumLinksType[] = [
  { id: 1, title: "link 1", link: "/" },
  { id: 2, title: "2", link: "/" },
];

async function seedDb(): Promise<void> {
  try {
    await db.delete(CurriculumLinks);
    await db.insert(CurriculumLinks).values(CurriculumLinksSeedData);
  } catch (e) {
    console.error("Failed to seed. Error: ", e);
    throw e;
  }
}

seedDb();
