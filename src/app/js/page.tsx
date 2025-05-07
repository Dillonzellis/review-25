import Link from "next/link";
import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";

export default function JsPage() {
  return (
    <MaxWidthWrapper>
      <TypographyH1 className="mb-4">JS</TypographyH1>
      <hr className="pb-4" />
      <Link href="js/loops">Loops</Link>
    </MaxWidthWrapper>
  );
}
