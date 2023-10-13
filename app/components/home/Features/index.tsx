import { CardInfoProp } from "@/app/utils/Interfaces";
import Card from "./Card";

async function fetchCardInfo() {
  const response = await fetch("http://localhost:3000/api/features");
  const CardInfo = await response.json();
  return CardInfo;
}

export default async function Features() {
  const data: CardInfoProp[] = await fetchCardInfo();

  return (
    <section className="p-8 sm:py-16">
      <div className="text-center mb-12">
        <h2 className="text-olive font-semibold sm:font-bold text-2xl sm:text-3xl mb-3">
          Don&apos;t have the time or simply dislike the hassle of grocery
          shopping?
        </h2>
        <p className="font-medium text-xl">
          InstaOja offers you a wide range of benefits
        </p>
      </div>
      <div className="flex justify-center">
        <Card data={data} />
      </div>
    </section>
  );
}
