import Supplies from "../components/Supplies";
import HomeBanner from "../components/HomeBanner";
import OurAim from "../components/OurAim";
import OurGoal from "../components/OurGoal";
import { useEffect } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import Testimonial from "../components/Testimonial";
import OurPledges from "../components/OurPledges";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HomeBanner />
      <div data-aos="fade-up">
        <Supplies />
      </div>
      <div data-aos="fade-up">
        <OurGoal />
      </div>
      <div >
        <OurAim />
      </div>
      <div data-aos="fade-up">
        <OurPledges />
      </div>
      <div data-aos="fade-up">
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
