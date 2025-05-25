import Link from "next/link";

type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkComponent({ href, children }: LinkComponentProps) {
  return (
    <Link href={href} className="text-xl font-bold hover:underline">
      {children}
    </Link>
  );
}
