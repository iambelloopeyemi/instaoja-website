import { GalleryPictureProp } from "@/app/utils/Interfaces";
import Image from "next/image";

export default function Gallery({ data }: { data: GalleryPictureProp[] }) {
  return (
    <ul className="grid grid-cols-2 gap-0.5">
      {data.map(({ src, alt }, index: number) => (
        <li
          key={index}
          className={`${index === 0 ? "flex items-end" : "flex items-start"}`}
        >
          <Image
            src={src}
            alt={alt}
            width={200}
            height={200}
            className="object-contain w-auto h-auto"
          />
        </li>
      ))}
    </ul>
  );
}
