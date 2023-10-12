import Logo from "../Logo";
import SiteMap from "./SiteMap";
import ContactUs from "./ContactUs";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-white px-5 sm:px-10 lg:px-20">
      <div className="px-5 py-10">
        <div className="mb-6">
          <Logo width={200} height={200} />
        </div>
        <div className="flex max-sm:flex-col justify-around">
          <div></div>
          <SiteMap />
          <ContactUs />
        </div>
      </div>
      <div className="py-3 border-t border-t-olive">
        <Copyright />
      </div>
    </footer>
  );
}
