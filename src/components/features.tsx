import {
  Gauge,
  IdCard,
  Package,
  Ruler,
  SquareLibrary,
  Wrench,
} from "lucide-react";

const items = [
  {
    title: "Performance Optimization",
    description:
      "Enhancing React apps by minimizing re-renders, lazy loading components, and utilizing memoization techniques for improved performance and speed.",
    icon: Gauge,
  },
  {
    title: "Redux State Management",
    description:
      "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
    icon: Wrench,
  },
  {
    title: "Tailwind Responsive Design",
    description:
      "Create responsive web interfaces effortlessly using Tailwind CSS utility classes, ensuring a consistent experience across all device sizes.",
    icon: Ruler,
  },
  {
    title: "Vite Production Deployment",
    description:
      "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
    icon: Package,
  },
  {
    title: "React Library Integration",
    description:
      "Seamlessly add functionality to React applications by integrating third-party libraries, ensuring smooth interactions and enhanced capabilities.",
    icon: SquareLibrary,
  },
  {
    title: "React App Authentication",
    description:
      "Secure React applications with robust authentication mechanisms, using libraries like Firebase, Auth0, or custom JWT-based solutions.",
    icon: IdCard,
  },
];

function Features() {
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-3xl">
        Everything you need to start a website
      </h2>
      <p className="mt-3 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        consequuntur.
      </p>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <li className="space-y-2" key={crypto.randomUUID()}>
            {<item.icon size={48} />}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
