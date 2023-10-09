import Link from "next/link";
import { ReactNode } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

interface ContactUsProp {
  icon: ReactNode;
  text: string;
}

export default function ContactUs() {
  const socials: ContactUsProp[] = [
    {
      icon: <FaLinkedin />,
      text: "instaoja",
    },
    {
      icon: <FaInstagram />,
      text: "instaoja",
    },
    {
      icon: <FaTwitter />,
      text: "instaoja",
    },
  ];

  const contacts: ContactUsProp[] = [
    {
      icon: <FaEnvelope />,
      text: "instaoja@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: "+2347055219750",
    },
  ];

  return (
    <div className="grid gap-3">
      <p className="font-bold text-xl">Contact Us</p>
      <div className="flex gap-6">
        <ul className="flex flex-col gap-3">
          {socials.map(({ icon, text }, index: number) => (
            <li key={index} className="flex items-center gap-1 hover:underline">
              <div>{icon}</div>
              <Link href="#" className="block">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3">
          {contacts.map(({ icon, text }, index: number) => (
            <li key={index} className="flex items-center gap-1">
              <div>{icon}</div>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
