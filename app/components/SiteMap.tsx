import Link from "next/link";

export function QuickLinks() {
  const quickLinks: string[] = ["About Us", "FAQ", "Careers"];
  return (
    <ul className="flex items-center gap-3">
      {quickLinks.map((quickLink) => (
        <li key={quickLink}>
          <Link href="#" className="text-sm font-light hover:underline">
            {quickLink}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function LegalLinks() {
  const legalLinks: string[] = ["Privacy Policy", "Terms of Service"];
  return (
    <ul className="flex items-center gap-3">
      {legalLinks.map((legalLink) => (
        <li key={legalLink}>
          <Link href="#" className="text-sm font-light hover:underline">
            {legalLink}
          </Link>
        </li>
      ))}
    </ul>
  );
}
