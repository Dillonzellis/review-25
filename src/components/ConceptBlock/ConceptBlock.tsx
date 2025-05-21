import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TypographyP } from "../Typography/TypographyP";
import { TypographyH3 } from "../Typography/TypographyH3";

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
        <SyntaxHighlighter language="javascript" style={gruvboxDark}>
          {code}
        </SyntaxHighlighter>
      </code>
      {desc && <TypographyP className="italic">{desc}</TypographyP>}
    </div>
  );
}
