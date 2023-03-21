import { Navbar, Footer } from "../components";
import { Hero, About, Explore } from "../sections";

const Home = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <Footer />
  </div>
);

export default Home;