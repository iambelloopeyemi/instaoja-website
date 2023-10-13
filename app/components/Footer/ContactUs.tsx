import Contacts from "./Contacts";
import Socials from "./Socials";

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-medium text-lg">Contact Us</p>
      <Socials />
      <Contacts />
    </div>
  );
}
