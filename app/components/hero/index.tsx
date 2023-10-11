import HeroGallery from "./HeroGallery";

export default function Hero() {
  return (
    <section className="bg-white rounded-3xl px-20 py-16 grid grid-cols-2">
      <div className="p-12 flex flex-col gap-12">
        <h1 className="text-olive font-bold text-5xl">
          Get your groceries delivered to your door step
        </h1>
        <p className="font-medium text-xl">
          InstaOja is an online platform that connects you with a personal
          shopper to fufil your groceries order
        </p>
      </div>
      <HeroGallery />
    </section>
  );
}
