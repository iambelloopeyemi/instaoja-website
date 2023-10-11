import { ReactNode } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

interface ContactUsProp {
  url?: string;
  icon: ReactNode;
  text?: string;
}

export const socials: ContactUsProp[] = [
  {
    url: "#",
    icon: <FaLinkedin />,
  },
  {
    url: "#",
    icon: <FaInstagram />,
  },
  {
    url: "#",
    icon: <FaTwitter />,
  },
];

export const contacts: ContactUsProp[] = [
  {
    url: "mailto:instaoja@gmail.com",
    icon: <FaEnvelope />,
    text: "instaoja@gmail.com",
  },
];
