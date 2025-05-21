import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";
import SideBarNav from "@/components/SideBarNav/SideBarNav";
import { NavMainData } from "@/components/SideBarNav/MainNavLinks";
import TypographyH1 from "@/components/Typography/TypographyH1";

export default function LoopsPage() {
  return (
    <MaxWidthWrapper>
      <SideBarNav navLinks={NavMainData} />
      <TypographyH1 className="mb-4">Loops</TypographyH1>
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
  );
}
