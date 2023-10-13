import Header from "./components/header";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import AboutUs from "./components/home/AboutUs";
import CallToAction from "./components/home/CallToAction";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow min-h-screen">
        <Hero />
        <Features />
        <AboutUs />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
