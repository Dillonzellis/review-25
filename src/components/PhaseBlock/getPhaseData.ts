import { db } from "@/db/client";
import { phases, PhaseSelectType } from "@/db/schema";
import { like } from "drizzle-orm";

export default async function getPhaseDataFromIndex(
  title: string,
): Promise<PhaseSelectType[]> {
  "use server";

  try {
    return await db
      .select()
      .from(phases)
      .where(like(phases.title, `%${title}%`));
  } catch (e) {
    console.error("failed to fetch phase. Error: ", e);
    throw e;
  }
}
