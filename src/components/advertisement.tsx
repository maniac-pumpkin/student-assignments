import { Button } from "./ui/button";

function Advertisement() {
  return (
    <section className="container mx-auto py-10 space-y-5 bg-black text-center text-white rounded-lg">
      <h2 className="text-5xl">Build faster websites</h2>
      <p>
        Pull content from anywhere and serve it fast with Astro's next-gen
        island architecture
      </p>
      <Button variant="secondary">Get started</Button>
    </section>
  );
}

export default Advertisement;
