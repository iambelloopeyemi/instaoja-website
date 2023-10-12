import { GalleryPictureProp } from "@/app/utils/Interfaces";
import Gallery from "./Gallery";
import Button from "../../Button";

async function fetchGalleryPictures() {
  const response = await fetch("http://localhost:3000/api/about-us", {
    next: { revalidate: 100 },
  });
  const GalleryPictures = await response.json();
  return GalleryPictures;
}

export default async function AboutUs() {
  const data: GalleryPictureProp[] = await fetchGalleryPictures();

  return (
    <section className="bg-white px-20 py-16 grid grid-cols-2 gap-5">
      <div>{data && <Gallery data={data} />}</div>
      <article className="p-12">
        <h3 className="text-olive font-bold text-3xl mb-6">Our Story</h3>
        <p className="font-medium mb-3">
          For many of us, finding time to go grocery shopping is nearly
          impossible due to our busy schedules and the prioritization of
          important tasks. However, grocery shopping is a fundamental step in
          preparing the food we eat. Some of us may have the time but lack the
          motivation to visit the market for groceries
        </p>
        <p className="font-medium mb-6">
          That&apos;s why we created InstaOja. Our platform is designed to
          fulfill your personalized grocery shopping list and deliver it to your
          doorstep without you having to leave your comfort zone
        </p>
        <div>
          <Button url="#about-us" text="learn more" />
        </div>
      </article>
    </section>
  );
}
