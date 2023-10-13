interface HeroProp {
  title: string;
}

export default function Hero({ title }: HeroProp) {
  return (
    <section className="bg-white px-5 py-8 sm:py-16 h-full">
      <h1 className="font-semibold sm:font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
        {title}
      </h1>
    </section>
  );
}
