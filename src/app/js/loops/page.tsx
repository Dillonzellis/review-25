import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";
import TypographyH2 from "@/components/Typograpy/TypographyH2";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";
import SideBarNav from "@/components/SideBarNav/SideBarNav";
import { NavMainData } from "@/components/SideBarNav/MainNavLinks";

export default function LoopsPage() {
  return (
    <>
      <SideBarNav navLinks={NavMainData} />
      <main>
        <MaxWidthWrapper>
          <TypographyH1 className="mb-4">JS</TypographyH1>
          <TypographyH2>Loops</TypographyH2>
          <hr className="pb-4" />
          <ConceptBlock
            id="forLoop"
            title="For Loop"
            code={`
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
      `}
          />
          <ConceptBlock
            id="forInLoop"
            title="For In Loop"
            code={`
const person = {name: "John", age: 30, job: "Developer"};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

name: John
age: 30
job: Developer 
      `}
            desc="Iterates over the enumerable properties of an object."
          />

          <ConceptBlock
            id="forOfLoop"
            title="For Of Loop"
            code={`
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

red
green
blue
      `}
            desc="Iterate over array elements"
          />
        </MaxWidthWrapper>
      </main>
    </>
  );
}
