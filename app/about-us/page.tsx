import Footer from "../components/footer";
import Header from "../components/header";

import Hero from "../components/Hero";
import VisionStatement from "../components/about-us/InfoCard";
import MissionStatement from "../components/about-us/InfoCard";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="">
        <Hero title="About Us" />
        <section className="px-5 py-8 sm:py-16 flex flex-col items-center gap-8">
          <VisionStatement
            heading="Our Vision"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid
        quis eaque! Unde, quasi, perferendis error fugiat eveniet commodi
        consectetur nobis, distinctio inventore porro ad consequatur rerum ipsam
        amet? Accusamus aperiam similique molestias expedita facilis,
        dignissimos ex eum, dolores modi commodi rerum rem error, consectetur
        esse ratione! Placeat, delectus quod?"
          />
          <MissionStatement
            heading="Our Mission"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid
        quis eaque! Unde, quasi, perferendis error fugiat eveniet commodi
        consectetur nobis, distinctio inventore porro ad consequatur rerum ipsam
        amet? Accusamus aperiam similique molestias expedita facilis,
        dignissimos ex eum, dolores modi commodi rerum rem error, consectetur
        esse ratione! Placeat, delectus quod?"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
