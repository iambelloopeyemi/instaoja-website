import Image from "next/image";

export default function HeroGallery() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-1">
      <div className="row-start-1 row-end-3 w-auto h-auto relative">
        <Image
          src="/second_shopper.jpg"
          alt="picture of a shopper"
          fill
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div>
        <Image
          src="/first_shopper.jpg"
          alt="picture of a shopper"
          width={500}
          height={500}
        />
      </div>
      <div>
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
