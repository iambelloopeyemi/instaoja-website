import Logo from "../Logo";
import Button from "../Button";

export default function Header() {
  return (
    <header className="px-5 sm:px-10 lg:px-20 py-4">
      <nav className="flex justify-between items-center">
        <div>
          <Logo width={180} height={180} />
        </div>
        <div>
          <Button url="#" text="get started" />
        </div>
      </nav>
    </header>
  );
}
