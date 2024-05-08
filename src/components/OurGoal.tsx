import { PiArrowBendDownRightBold } from "react-icons/pi";

const OurGoal = () => {
  return (
    <div className="container w-full mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 my-5 lg:my-16">
      <div className="w-full lg:w-1/2 pt-2 lg:pt-12 px-5 lg:px-0">
        <h1 className="flex flex-col lg:gap-3 text-2xl lg:text-5xl font-semibold font-primary text-primary leading-10">
          Our Goal: positively <span>impact the world</span>
        </h1>
        <p className="font-secondary text-tertiary mt-6 mb-9">
          Our organization aims to provide immediate relief and long-term
          support to communities affected by disasters, ensuring they have
          access to essential resources and services. We strive to make a
          lasting impact on the lives of those in need. Join us in our mission
          to create a better, more resilient world for all.
        </p>
        <button className="btn bg-secondary font-secondary text-light border-0">
          Donate Now
        </button>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-100 rounded-md p-5 lg:p-12">
        <h2 className="text-primary font-primary text-xl lg:text-2xl font-semibold">
          We aim for equitable access to basic needs and peaceful societies
        </h2>
        <p className="text-tertiary font-secondary mt-5 mb-3">
          Gravida cum sociis natoque penatibus et magnis. Et molestie ac feugiat
          sed. Volutpat lacus laoreet non curabitur gravida arcu ac tortor
          dignissim. Sed vulputate odio ut enim blandit volutpat maecenas
          volutpat blandit. Cras ornare arcu dui vivamus arcu felis bibendum ut.
        </p>
        <ol>
          <li className="flex gap-2 ps-3 text-secondary"><PiArrowBendDownRightBold /> <span>Equitable Access To Basic Needs</span></li>
          <li className="flex gap-2 ps-3 text-secondary"><PiArrowBendDownRightBold /> <span>Peaceful Societies</span></li>
          <li className="flex gap-2 ps-3 text-secondary"><PiArrowBendDownRightBold /> <span>Aim To Help Others</span></li>
        </ol>
      </div>
    </div>
  );
};

export default OurGoal;
