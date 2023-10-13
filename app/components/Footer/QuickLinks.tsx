import Link from "next/link";
import { transformLinks } from "@/app/utils/HelperFunctions";

export default function QuickLinks() {
  const quickLinks: string[] = ["About Us", "FAQs", "Careers"];
  const links = transformLinks(quickLinks);

  return (
    <ul className="flex flex-col gap-2">
      <span className="block font-medium">Quick Links</span>
      {links.map(({ link, text }, index: number) => (
        <li key={index} className="hover:underline">
          <Link href={`${link}`} className="font-light">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
