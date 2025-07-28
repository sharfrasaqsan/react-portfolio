import Contact from "../components/Contact";
import FeatureProjects from "../components/FeatureProjects";
import Hero from "../components/Hero";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <Hero />
      <FeatureProjects />
      <Testimonials />
      <Contact />
      <Resume />
    </section>
  );
};

export default Home;
