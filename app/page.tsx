import Header from "./components/Header";
import Hero from "./components/home/Hero";
import Footer from "./components/Footer";
import Features from "./components/home/Features";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow min-h-screen">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
