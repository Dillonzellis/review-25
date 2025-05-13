import Link from "next/link";
import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typograpy/TypographyH1";

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
};

function LinkComponent({ href, children }: LinkComponentProps) {
  return (
    <Link href={href} className="text-xl font-bold hover:underline">
      {children}
    </Link>
  );
}

export default function JsPage() {
  return (
    <MaxWidthWrapper>
      <TypographyH1 className="mb-4">Javascript</TypographyH1>
      <hr className="pb-4" />
      <div className="flex flex-col gap-2">
        <LinkComponent href="js/loops">Loops</LinkComponent>
        <LinkComponent href="js/arrays">Arrays</LinkComponent>
        <LinkComponent href="js/misc">Misc</LinkComponent>
      </div>
    </MaxWidthWrapper>
  );
}
