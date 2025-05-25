import Link from "next/link";

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
    <div className="px-12 py-4">
      <h1>DSA</h1>
      <div className="flex flex-col gap-2">
        <LinkComponent href="js/loops">Loops</LinkComponent>
        <LinkComponent href="js/arrays">Arrays</LinkComponent>
        <LinkComponent href="js/misc">Misc</LinkComponent>
      </div>
    </div>
  );
}
