import Link from "next/link";
import Image from "next/image";

interface LogoProp {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProp) {
  return (
    <>
      <Link href="/">
        <Image
          src="/instaoja_logo.png"
          alt="instaoja logo"
          width={width}
          height={height}
          className="w-28 sm:w-32 md:w-40 lg:w-auto h-auto"
        />
      </Link>
    </>
  );
}
