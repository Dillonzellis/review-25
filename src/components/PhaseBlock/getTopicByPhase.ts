import { db } from "@/db/client";
import { topics } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function getTopicByPhase(id: string) {
  "use server";

  const topicsData = await db
    .select()
    .from(topics)
    .where(eq(topics.phasesId, id));

  try {
    return topicsData;
  } catch (e) {
    console.error("failed to fetch topics by Phase. Error: ", e);
    throw e;
  }
}
