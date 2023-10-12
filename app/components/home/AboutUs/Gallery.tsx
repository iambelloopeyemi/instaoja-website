import { GalleryPictureProp } from "@/app/utils/Interfaces";
import Image from "next/image";

export default function Gallery({ data }: { data: GalleryPictureProp[] }) {
  return (
    <ul className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-0.5">
      {data.map(({ src, alt }, index: number) => (
        <li key={index} className="border w-auto h-auto">
          <Image src={src} alt={alt} width={200} height={200} />
        </li>
      ))}
    </ul>
  );
}
