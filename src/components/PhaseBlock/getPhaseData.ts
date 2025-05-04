import { db } from "@/db/client";
import { phases, PhaseSelectType } from "@/db/schema";

export default async function getPhaseDataFromIndex(idx: string): Promise<any> {
  "use server";

  try {
    return await db
      .select({ title: phases.title })
      .from(phases)
      .orderBy(phases.orderIndex);
  } catch (e) {
    console.error("failed to fetch phases. Error: ", e);
    throw e;
  }
}
