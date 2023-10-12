import Button from "../../Button";
import Gallery from "./Gallery";

export default function Hero() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-8 sm:py-16 grid sm:grid-cols-2">
      <div className="max-sm:order-2 p-3 sm:p-6 lg:p-12 flex flex-col gap-5 sm:gap-10">
        <h1 className="text-olive font-semibold sm:font-bold text-2xl sm:text-3xl">
          Get your groceries delivered to your door step
        </h1>
        <p className="font-medium text-lg sm:text-xl">
          InstaOja is an online platform that connects you with a personal
          shopper to fufil your groceries order
        </p>
        <div>
          <Button url="#" text="get started" />
        </div>
      </div>
      <div className="px-5">
        <Gallery />
      </div>
    </section>
  );
}
