import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import ConceptBlock from "@/components/ConceptBlock/ConceptBlock";
import SideBarNav from "@/components/SideBarNav/SideBarNav";
import { NavMainData } from "@/components/SideBarNav/MainNavLinks";
import TypographyH1 from "@/components/Typograpy/TypographyH1";

export default function MiscPage() {
  return (
    <MaxWidthWrapper>
      <SideBarNav navLinks={NavMainData} />
      <TypographyH1 className="mb-4">Misc</TypographyH1>
      <hr className="pb-4" />
      <ConceptBlock
        id="closures"
        title="Closures"
        code={`
function createCounter() {
  let count = 0;  // Private variable
  
  return function() {
    count++;  // Accessing the parent's variable
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
      `}
        desc="Closures are functions that remember the environment in which they were created, including variables from their parent function's scope. They're fundamental to JavaScript and appear in React hooks, event handlers, and callback patterns."
      />
      <ConceptBlock
        id="#promises"
        title="Promises"
        code={`
// Basic Promise structure
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true;
    if (success) {
      resolve('Data retrieved successfully');
    } else {
      reject('Error fetching data');
    }
  });
};

// Using the Promise
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
      `}
        desc="Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Essential for fetching data in React applications."
      />
    </MaxWidthWrapper>
  );
}
