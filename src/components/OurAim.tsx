import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const OurAim = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 my-5 lg:my-16">
      <div data-aos="fade-right" data-aos-delay="300" className="w-full lg:w-1/2">
        <img className="w-full rounded-md" src="images/food.jpg" alt="Flood" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 lg:px-0">
        <h1 className="flex flex-col lg:gap-3 text-2xl lg:text-4xl font-bold font-primary text-white leading-10">
          We aim to better lives <span>and the world</span>{" "}
          <span>through kindness</span>
        </h1>
        <p className="font-secondary text-tertiary mt-5 mb-3">
          The aim of our disaster supplies organization is to provide immediate
          relief and support to flood-affected individuals and communities, as
          well as to other natural disaster victims. Our goal is to improve the
          overall well-being and resilience of those affected by disasters by
          providing essential supplies, shelter, medical assistance, and other
          necessary resources.
        </p>
        <p className="font-secondary text-tertiary mt-2 mb-5">
          Additionally, we aim to enhance the health and safety of
          disaster-affected populations by promoting hygiene practices,
          providing access to clean water and sanitation facilities, and
          offering mental health support services.
        </p>
        <div>
          <button className="btn bg-primary font-secondary text-light border-0">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurAim;
