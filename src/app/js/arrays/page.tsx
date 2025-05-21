import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";
import SideBarNav from "@/components/SideBarNav/SideBarNav";
import { NavMainData } from "@/components/SideBarNav/MainNavLinks";
import TypographyH1 from "@/components/Typography/TypographyH1";

export default function ArraysPage() {
  return (
    <MaxWidthWrapper>
      <SideBarNav navLinks={NavMainData} />
      <TypographyH1 className="mb-4">Arrays Methods</TypographyH1>
      <hr className="border-b-slate-50 pb-4" />
      <ConceptBlock
        id="#forEach"
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
      <ConceptBlock
        id="#map"
        title="map"
        code={`
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

[2, 4, 6, 8, 10]
      `}
        desc="Creates a new array by applying a function to each element."
      />
      <ConceptBlock
        id="#filter"
        title="filter"
        code={`
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); 

[2, 4] 
      `}
        desc="Creates a new array with elements that pass a test."
      />
      <ConceptBlock
        id="#reduce"
        title="reduce"
        code={`
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

15
      `}
        desc="Reduces an array to a single value by applying a function."
      />
    </MaxWidthWrapper>
  );
}
