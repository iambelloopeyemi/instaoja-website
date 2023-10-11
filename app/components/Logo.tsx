import Image from "next/image";
import Link from "next/link";

interface LogoProp {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProp) {
  return (
    <>
      <Link href="/" className="block w-auto h-auto">
        <Image
          src="/instaoja_logo.png"
          alt="instaoja logo"
          width={width}
          height={height}
        />
      </Link>
    </>
  );
}
