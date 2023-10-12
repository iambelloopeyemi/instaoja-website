import Card from "./Card";
import { CardInfoProp } from "@/app/utils/Interfaces";

async function fetchCardInfo() {
  const response = await fetch("http://localhost:3000/api/features");
  const CardInfo = await response.json();
  return CardInfo;
}

export default async function Features() {
  const data: CardInfoProp[] = await fetchCardInfo();

  return (
    <section className="px-5 py-16">
      <div className="text-center px-48 mb-12">
        <h2 className="text-olive font-bold text-3xl mb-3">
          You do not have time to shop for groceries yourself or you just do not
          like the hassle?
        </h2>
        <p className="font-medium text-xl">
          InstaOja ensures that what you order is what you get
        </p>
      </div>
      <div className="flex justify-center">
        <Card data={data} />
      </div>
    </section>
  );
}
