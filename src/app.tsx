import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Technologies from "./components/technologies";
import Advertisement from "./components/advertisement";

export default function App() {
  return (
    <>
      <header className="space-y-20">
        <Navbar />
        <Hero />
      </header>
      <main className="space-y-20 mt-20">
        <Features />
        <Technologies />
        <Advertisement />
      </main>
      <footer className="h-20 mt-20 text-center">
        <p>Copyright © 2024. All rights reserved</p>
        <p>Made by Web3Templates</p>
      </footer>
    </>
  );
}
