import { Navbar, Footer } from "../components";
import { Hero, About, Explore, GetStarted, WhatsNew } from "../sections";

const Home = () => (
  <div className="bg-black overflow-hidden">
    <div className="relative">
      <Navbar />
      <div className="gradient-06 z-0" />
      <Hero />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Home;