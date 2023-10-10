import Image from "next/image";

interface LogoProp {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProp) {
  return (
    <div className="w-auto h-auto">
      <Image
        src="/instaoja_logo.png"
        alt="instaoja logo"
        width={width}
        height={height}
      />
    </div>
  );
}
