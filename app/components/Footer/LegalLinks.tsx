import Link from "next/link";
import { transformLinks } from "@/app/utils/HelperFunctions";

export default function LegalLinks() {
  const legalLinks: string[] = ["Privacy Policy", "Terms of Service"];
  const links = transformLinks(legalLinks);

  return (
    <ul className="flex flex-col gap-2">
      <span className="block font-medium">Legal</span>
      {links.map(({ link, text }, index: number) => (
        <li key={index} className="hover:underline">
          <Link href={`#${link}`} className="font-light">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
