import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";

export default function ArraysPage() {
  return (
    <MaxWidthWrapper>
      <TypographyH1 className="mb-4">Arrays Methods</TypographyH1>
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
      <ConceptBlock
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
