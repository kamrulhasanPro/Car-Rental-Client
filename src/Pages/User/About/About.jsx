import MyContainer from "../../../Components/MyContainer/MyContainer";
import AboutUs from "./section/AboutUs";
import OurVision from "./section/OurVision";

const About = () => {
  return (
    <MyContainer className="">
      <div className="mx-auto  py-16 space-y-20">
        {/* ===== Section 1: About Us ===== */}
        <AboutUs />

        {/* ===== Section 2: Our Vision ===== */}
        <OurVision />
      </div>
    </MyContainer>
  );
};

export default About;
