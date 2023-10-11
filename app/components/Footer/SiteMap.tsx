import LegalLinks from "./LegalLinks";
import QuickLinks from "./QuickLinks";

export default function SiteMap() {
  return (
    <div className="flex gap-12">
      <QuickLinks />
      <LegalLinks />
    </div>
  );
}
