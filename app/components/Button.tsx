import Link from "next/link";

interface ButtonProp {
  url: string;
  text: string;
}

export default function Button({ url, text }: ButtonProp) {
  return (
    <>
      <Link href={url}>
        <button className="bg-olive rounded-lg p-2 sm:p-3 hover:scale-105">
          <span className="text-white font-semibold sm:font-bold text-sm sm:text-base uppercase">
            {text}
          </span>
        </button>
      </Link>
    </>
  );
}
