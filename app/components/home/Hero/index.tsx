import Button from "../../Button";
import Gallery from "./Gallery";

export default function Hero() {
  return (
    <section className="bg-white px-20 py-16 flex items-center justify-center">
      <div className="p-12 flex flex-col gap-10">
        <h1 className="text-olive font-bold text-4xl">
          Get your groceries delivered to your door step
        </h1>
        <p className="font-medium text-xl">
          InstaOja is an online platform that connects you with a personal
          shopper to fufil your groceries order
        </p>
        <div>
          <Button url="#" text="get started" />
        </div>
      </div>
      <Gallery />
    </section>
  );
}
