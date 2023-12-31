import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-0.5">
      <div className="row-start-1 row-end-3 relative">
        <Image
          src="/first_shopper.jpg"
          alt="picture of a shopper"
          fill
          sizes="100vw"
          className="w-auto h-auto object-cover object-center"
        />
      </div>
      <div>
        <Image
          src="/second_shopper.jpg"
          alt="picture of a shopper"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
      <div>
        <Image
          src="/delivery.jpg"
          alt="picture of a delivery"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
    </div>
  );
}
