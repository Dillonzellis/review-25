import { TypographyH2 } from "@/components/Typograpy/TypographyH2";
import getPhaseData from "./getPhaseData";
import { PhaseSelectType } from "@/db/schema";

export default async function PhaseBlock() {
  const phases = await getPhaseData("Phase 1");

  console.log(phases);
  return (
    <div>
      <TypographyH2>Phase Block</TypographyH2>
      {phases.map((phase: PhaseSelectType) => (
        <div key={phase.id}>{phase.title}</div>
      ))}
    </div>
  );
}
