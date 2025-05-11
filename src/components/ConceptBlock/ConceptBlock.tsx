import { TypographyH3 } from "../Typograpy/TypographyH3";
import { TypographyP } from "../Typograpy/TypographyP";

type ConceptBlockType = {
  id: string;
  title: string;
  code: string;
  desc?: string;
};

export default function ConceptBlock({
  id,
  title,
  code,
  desc,
}: ConceptBlockType) {
  return (
    <div id={id} className="mb-4 bg-slate-800 p-6">
      <TypographyH3>{title}</TypographyH3>
      <code>
        <pre>{code}</pre>
      </code>
      {desc && <TypographyP className="italic">{desc}</TypographyP>}
    </div>
  );
}
