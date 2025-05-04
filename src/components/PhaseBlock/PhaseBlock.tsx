import { TypographyH2 } from "@/components/Typograpy/TypographyH2";
import getPhaseData from "./getPhaseData";
import { PhaseSelectType } from "@/db/schema";

interface PhaseBlockProps {
  phaseTitle?: string;
}

export default async function PhaseBlock({ phaseTitle }: PhaseBlockProps) {
  const phases = await getPhaseData(phaseTitle || "Phase 1");

  if (phases.length === 0) {
    return (
      <div>
        <TypographyH2>Phase Block</TypographyH2>
        <div>No phase found with title containing: {phaseTitle}</div>
      </div>
    );
  }

  return (
    <div>
      <TypographyH2>Phase Block</TypographyH2>
      {phases.map((phase: PhaseSelectType) => (
        <div key={phase.id}>{phase.title}</div>
      ))}
    </div>
  );
}
