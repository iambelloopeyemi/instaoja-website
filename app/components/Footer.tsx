import Logo from "./Logo";
import WaitList from "./WaitList";
import ContactUs from "./ContactUs";
import { LegalLinks, QuickLinks } from "./SiteMap";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-white px-20">
      <div className="px-6 py-12 grid gap-6">
        <div className="flex justify-start">
          <Logo width={200} height={200} />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-end">
            <WaitList />
          </div>
          <div className="flex justify-center">
            <ContactUs />
          </div>
        </div>
      </div>
      <div className="px-6 py-3 border-t border-t-olive">
        <div className="grid grid-cols-2">
          <div className="flex justify-start">
            <QuickLinks />
          </div>
          <div className="flex justify-end">
            <LegalLinks />
          </div>
        </div>
        <div className="flex justify-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
