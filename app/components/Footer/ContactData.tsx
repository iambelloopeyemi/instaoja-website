import { ReactNode } from "react";
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

interface ContactUsProp {
  url?: string;
  icon: ReactNode;
  text?: string;
}

export const socials: ContactUsProp[] = [
  {
    url: "https://www.linkedin.com/company/instaoja/",
    icon: <FaLinkedin />,
  },
  {
    url: "https://www.instagram.com/instaoja/",
    icon: <FaInstagram />,
  },
  {
    url: "https://twitter.com/instaoja",
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
