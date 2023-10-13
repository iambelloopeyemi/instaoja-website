interface InfoCardProp {
  heading: string;
  body: string;
}

export default function InfoCard({ heading, body }: InfoCardProp) {
  return (
    <article className="">
      <h2 className="text-olive font-semibold sm:font-bold text-2xl sm:text-3xl mb-4">
        {heading}
      </h2>
      <p className="font-light sm:font-medium">{body}</p>
    </article>
  );
}
