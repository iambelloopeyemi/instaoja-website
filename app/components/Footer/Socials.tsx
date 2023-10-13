import Link from "next/link";
import { socials } from "./ContactData";

export default function Socials() {
  return (
    <ul className="flex items-center gap-6">
      {socials.map(({ url, icon }, index: number) => (
        <li key={index} className="hover:scale-105">
          <Link href={`${url}`} target="_blank" className="text-[32px]">
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
