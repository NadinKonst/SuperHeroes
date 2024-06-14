import "./App.css";
import Hero from "./components/Hero";
import { data } from "./data";

export default function App() {
  return (
    <main>
      <h2>Super Heroes</h2>
      <div className="hero-card">
        <Hero {...data[0]} />
        <Hero {...data[1]} />
        <Hero {...data[2]} />
        <Hero {...data[3]} />
        <Hero {...data[4]} />
        <Hero {...data[5]} />
        <Hero {...data[6]} />
        <Hero {...data[7]} />
        <Hero {...data[8]} />
        <Hero {...data[9]} />
      </div>
    </main>
  );
}
