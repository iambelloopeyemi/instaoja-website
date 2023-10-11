import Logo from "../Logo";
import SiteMap from "./SiteMap";
import ContactUs from "./ContactUs";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="bg-white px-20">
      <div className="px-5 py-10 flex justify-around">
        <div>
          <Logo width={200} height={200} />
        </div>
        <SiteMap />
        <ContactUs />
      </div>
      <div className="py-3 border-t border-t-olive">
        <Copyright />
      </div>
    </footer>
  );
}
