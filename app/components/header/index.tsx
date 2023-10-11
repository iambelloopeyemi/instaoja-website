import Button from "../Button";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="px-20 py-4">
      <nav className="flex justify-between items-center">
        <div>
          <Logo width={180} height={180} />
        </div>
        <div>
          <Button url="#" text="join waitlist" />
        </div>
      </nav>
    </header>
  );
}
