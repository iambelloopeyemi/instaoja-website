import Button from "../Button";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="px-20 py-4">
      <nav className="flex justify-between items-center">
        <Logo width={180} height={180} />
        <div>
          <Button url="#" text="get started" />
        </div>
      </nav>
    </header>
  );
}
