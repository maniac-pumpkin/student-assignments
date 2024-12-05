import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="container mx-auto text-start flex flex-col items-center lg:justify-between lg:flex-row-reverse">
      <img
        className="w-full max-w-2xl mb-5 lg:mb-0"
        src="./hero-source.svg"
        alt="hero svg"
      />
      <div className="space-y-5">
        <h1 className="font-bold text-2xl max-w-56 lg:text-5xl lg:max-w-2xl">
          Scalable Apps with frameworks.
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate et neque earum iste hic consequatur nulla deserunt
          architecto numquam!
        </p>
        <div className="flex flex-col gap-2 lg:flex-row">
          <Button variant="default">Download for Free</Button>
          <Button variant="outline">Github Repo</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
