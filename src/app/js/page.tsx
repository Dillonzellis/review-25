import MaxWidthWrapper from "@/components/UI/MaxWidthWrapper";
import TypographyH1 from "@/components/Typography/TypographyH1";
import LinkComponent from "@/components/UI/LinkComponent";

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
