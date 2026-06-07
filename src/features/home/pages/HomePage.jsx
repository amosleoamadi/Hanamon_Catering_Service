import About from "../components/ui/AboutSection";
import Contact from "../components/ui/ContactUsSection";
import Gallery from "../components/ui/Gallery";
import HeroSection from "../components/ui/HeroSection";
import Services from "../components/ui/ServiceSection";
import Testimonials from "../components/ui/Testimonial";

const HomePage = () => {
  return (
    <div className="w-full min-h-full flex flex-col">
      <HeroSection />
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
