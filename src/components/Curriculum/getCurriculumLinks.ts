"use server";

import { db } from "@/db/client";
import { CurriculumLinks, CurriculumLinksType } from "@/db/schema";

export default async function getCurreLinks(): Promise<CurriculumLinksType[]> {
  try {
    return await db.select().from(CurriculumLinks);
  } catch (e) {
    console.error("failed to fetch. Error: ", e);
    throw e;
  }
}
