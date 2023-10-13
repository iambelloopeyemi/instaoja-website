import Hero from "../components/Hero";
import InfoCard from "../components/about-us/InfoCard";
import Footer from "./Footer";
import Header from "./Header";

interface NoContentProp {
  title: string;
  heading: string;
  body: string;
}

export default function NoContent({ title, heading, body }: NoContentProp) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero title={title} />
        <section className="px-5 py-8 sm:py-16">
          <InfoCard heading={heading} body={body} />
        </section>
      </main>
      <Footer />
    </>
  );
}
