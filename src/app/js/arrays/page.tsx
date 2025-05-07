import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";

export default function ArraysPage() {
  return (
    <MaxWidthWrapper>
      <TypographyH1 className="mb-4">Arrays</TypographyH1>
      <hr className="pb-4" />
      <ConceptBlock
        title="forEach"
        code={`
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

0: apple
1: banana
2: orange
      `}
        desc="Iterate over array elements with their indices"
      />
    </MaxWidthWrapper>
  );
}
