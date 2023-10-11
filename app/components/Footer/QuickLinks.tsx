import Link from "next/link";
import { transformLinks } from "@/app/utils/HelperFunction";

export default function QuickLinks() {
  const quickLinks: string[] = ["About Us", "FAQ", "Careers"];
  const links = transformLinks(quickLinks);

  return (
    <ul className="flex flex-col gap-2">
      <span className="block font-medium">Quick Links</span>
      {links.map(({ link, text }, index: number) => (
        <li key={index}>
          <Link href={`#${link}`} className="font-light hover:underline">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
