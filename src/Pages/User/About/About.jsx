import AboutUs from "./section/AboutUs";
import OurVision from "./section/OurVision";

const About = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* ===== Section 1: About Us ===== */}
        <AboutUs />

        {/* ===== Section 2: Our Vision ===== */}
        <OurVision />
      </div>
    </section>
  );
};

export default About;
