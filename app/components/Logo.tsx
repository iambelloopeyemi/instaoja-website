import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-auto h-auto">
      <Image
        src="/instaoja_logo.png"
        alt="instaoja logo"
        width={250}
        height={250}
      />
    </div>
  );
}
