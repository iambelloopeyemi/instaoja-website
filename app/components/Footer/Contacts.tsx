import Link from "next/link";
import { contacts } from "./ContactData";

export default function Contacts() {
  return (
    <ul className="flex flex-col gap-3">
      {contacts.map(({ url, icon, text }, index: number) => (
        <li key={index} className="hover:underline">
          <Link href={`${url}`} className="flex items-center gap-1.5">
            <i className="block text-[22px]">{icon}</i>
            <span className="block">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
