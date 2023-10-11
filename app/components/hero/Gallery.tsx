import Image from "next/image";

export default function HeroGallery() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-0.5">
      <div className="row-start-1 row-end-3 w-auto h-auto relative">
        <Image
          src="/first_shopper.jpg"
          alt="picture of a shopper"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="w-auto h-auto">
        <Image
          src="/second_shopper.jpg"
          alt="picture of a shopper"
          width={500}
          height={500}
        />
      </div>
      <div className="w-auto h-auto">
        <Image
          src="/delivery.jpg"
          alt="picture of a delivery"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
