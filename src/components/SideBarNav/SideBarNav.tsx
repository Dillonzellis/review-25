import { NavLinkType } from "@/types/NavLinksType";
import Link from "next/link";

type SideBarNavProps = {
  navLinks: NavLinkType[];
};

export default function SideBarNav({ navLinks }: SideBarNavProps) {
  return (
    <div className="fixed right-0 max-w-xl bg-slate-900/70 p-4">
      <div className="flex flex-col gap-2">
        <div className="text-2xl leading-none font-bold">JS</div>
        <hr className="border-t-slate-50 pb-4" />
        {navLinks.map((link, idx) => (
          <Link key={idx} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
