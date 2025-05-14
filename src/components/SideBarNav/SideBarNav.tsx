import Link from "next/link";
import type { NavLinkType } from "./MainNavLinks";

type SideBarNavProps = {
  navLinks: NavLinkType[];
};

export default function SideBarNav({ navLinks }: SideBarNavProps) {
  return (
    <div className="fixed right-0 -mt-4 max-w-xl bg-slate-900/70 p-4">
      <div className="flex flex-col gap-2">
        <Link href="/js" className="text-2xl leading-none font-bold">
          JS
        </Link>
        <hr className="border-t-slate-50 pb-2" />
        {navLinks.map((link, idx) => (
          <Link key={idx} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
