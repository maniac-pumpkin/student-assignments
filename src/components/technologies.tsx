const techImgPaths = [
  "./js.png",
  "./nextjs.png",
  "./react.png",
  "./redux.png",
  "./tailwind.png",
  "ts.png",
];

function Technologies() {
  return (
    <section className="container mx-auto text-center">
      <h2 className="font-bold text-3xl mb-10">Works with your technologies</h2>
      <ul className="flex justify-center gap-x-10">
        {techImgPaths.map((path) => (
          <li key={crypto.randomUUID()}>
            <img src={path} alt="tech pic" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Technologies;
