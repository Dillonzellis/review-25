import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
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
        <SyntaxHighlighter language="javascript" style={synthwave84}>
          {code}
        </SyntaxHighlighter>
      </code>
      {desc && <TypographyP className="italic">{desc}</TypographyP>}
    </div>
  );
}
