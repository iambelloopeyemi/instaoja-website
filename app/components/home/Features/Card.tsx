import Image from "next/image";
import { CardInfoProp } from "@/app/utils/Interfaces";

export default async function Card({ data }: { data: CardInfoProp[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-5">
      {data &&
        data.map(({ src, alt, text }, index: number) => (
          <li
            key={index}
            className="bg-white rounded-xl p-6 sm:p-12 flex flex-col items-center gap-2"
          >
            <div>
              <Image
                src={src}
                alt={alt}
                width={128}
                height={128}
                className="w-auto h-auto"
              />
            </div>
            <p className="font-medium text-lg text-center">{text}</p>
          </li>
        ))}
    </ul>
  );
}
