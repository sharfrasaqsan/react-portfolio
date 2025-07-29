import About from "../components/About";
import Contact from "../components/Contact";
import FeatureProjects from "../components/FeatureProjects";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <FeatureProjects />
      <Testimonials />
      <Contact />
    </section>
  );
};

export default Home;
