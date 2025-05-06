import "dotenv/config";
import { db } from "./client";
import { phases, PhaseInsertType, TopicInsertType } from "./schema";

const phasesSeedData: PhaseInsertType[] = [
  { title: "Phase 1: Master Core Frontend Skills", orderIndex: 1 },
  { title: "Phase 2: Expand Full-Stack Capabilities", orderIndex: 2 },
  { title: "Phase 3: Technical Interview Preparation", orderIndex: 3 },
];

// const topicsSeedData: TopicInsertType = [
//   {
//     title: "",
//     orderIndex: "",
//   },
// ];

async function seedDb(): Promise<void> {
  try {
    await db.delete(phases);
    await db.insert(phases).values(phasesSeedData);
  } catch (e) {
    console.error("Failed to seed. Error: ", e);
    throw e;
  }
}

seedDb();
