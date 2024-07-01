import { MdArrowDownward } from "react-icons/md";

const HomeBanner = () => {
  return (
    <div className="h-dvh object-cover flex items-center relative">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-full h-full object-cover"
      >
        <source src="video/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-20 w-full h-full bg-black opacity-50"></div>
      <div className="header_fade-in absolute z-20"></div>

      <div className="w-full text-center px-5 lg:px-0 relative z-20">
        <h1 className="font-primary text-white max-w-[35ch] mx-auto text-3xl md:text-4xl font-bold mb-2">
          DEDICATED TO CREATING THE GREATEST{" "}
          <span className="text-secondary">POSITIVE IMPACT</span> ON THE WORLD
        </h1>
        <p className="font-secondary text-white text-md mx-auto max-w-[90ch] ">
          We are committed to maximizing our positive impact on the world,
          utilizing resources to provide for communities and individuals in
          need.
        </p>
      </div>
      <button
        className="absolute flex items-center gap-3 z-20 bottom-5 left-1/2 transform -translate-x-1/2 px-5 py-3 backdrop-blur-sm bg-dark/50 mb-32 hover:bg-dark transition-all text-white font-secondary text-sm rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("pledges")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        See Our Work <MdArrowDownward className="text-secondary" />
      </button>
    </div>
  );
};

export default HomeBanner;
