import Image from "next/image";
import { CardInfoProp } from "@/app/utils/Interfaces";

export default async function Card({ data }: { data: CardInfoProp[] }) {
  return (
    <ul className="grid grid-cols-4">
      {data &&
        data.map(({ src, alt, text }, index: number) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <div>
              <Image src={src} alt={alt} width={100} height={100} />
            </div>
            <p className="text-center">{text}</p>
          </li>
        ))}
    </ul>
  );
}
