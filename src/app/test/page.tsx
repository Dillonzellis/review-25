import PhaseBlock from "@/components/PhaseBlock/PhaseBlock";
import { TypographyH1 } from "@/components/Typograpy/TypographyH1";

export default function TestPage() {
  return (
    <div className="mt-20 flex-col gap-4 flex min-h-screen items-center">
      <TypographyH1>Test Page</TypographyH1>
      <PhaseBlock phaseTitle="phase 1" />
    </div>
  );
}
