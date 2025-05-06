import { db } from "@/db/client";
import { phases, resources, topics } from "@/db/schema";
import phasesData from "./phases.json";
import topicsData from "./topics.json";

type PhaseData = {
  key: string;
  title: string;
  orderIndex: number;
};

type TopicData = {
  phaseKey: string;
  key: string;
  title: string;
  orderIndex: number;
};

type ResourceData = {
  phaseKey: string;
  topicKey: string;
  title: string;
  orderIndex: number;
};

async function seedDb(): Promise<void> {
  try {
    await db.transaction(async (tx) => {
      await tx.delete(resources);
      await tx.delete(topics);
      await tx.delete(phases);

      const insertedPhases = await tx
        .insert(phases)
        .values(
          phasesData.map(({ key, ...phaseData }) => ({
            title: phaseData.title,
            orderIndex: phaseData.orderIndex,
          })),
        )
        .returning();

      const phaseIdMap = phasesData.reduce<Record<string, string>>(
        (map, phase, index) => {
          map[phase.key] = insertedPhases[index].id;
          return map;
        },
        {},
      );

      // console.log("phaseIdMap: ", phaseIdMap);

      const insertedTopics = await tx
        .insert(topics)
        .values(
          topicsData.map(({ phaseKey, key, ...topicsData }) => ({
            phasesId: phaseIdMap[phaseKey],
            title: topicsData.title,
            orderIndex: topicsData.orderIndex,
          })),
        )
        .returning();

      // const topicIdMap = topicsData
    });
  } catch (e) {}
}

seedDb();
