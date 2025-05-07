import { TypographyH3 } from "../Typograpy/TypographyH3";
import { TypographyP } from "../Typograpy/TypographyP";

type ConceptBlockType = {
  title: string;
  code: React.ReactNode;
  desc?: string;
};

export default function ConceptBlock({ title, code, desc }: ConceptBlockType) {
  return (
    <div className="mb-4 bg-slate-900 p-6">
      <TypographyH3>{title}</TypographyH3>
      <code>
        <pre>{code}</pre>
      </code>
      {desc && <TypographyP className="italic">{desc}</TypographyP>}
    </div>
  );
}
