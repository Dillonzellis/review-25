import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";
import TypographyH2 from "@/components/Typograpy/TypographyH2";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";

export default function JsPage() {
  return (
    <MaxWidthWrapper>
      <TypographyH1>JS Page</TypographyH1>
      <TypographyH2>Loops</TypographyH2>
      <hr className="pb-4" />
      <ConceptBlock
        title="For Loop"
        code={`
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
      `}
      ></ConceptBlock>
    </MaxWidthWrapper>
  );
}
