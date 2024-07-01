// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Title from "./Title";

const pledges = [
  {
    country: "Bangladesh",
    pledge: "Donate 1000 masks",
    image:
      "https://assets-global.website-files.com/651a753c0bc91f8db5b635af/66535883993989ea2d00ea7b_Captura%20de%20ecra%CC%83%202024-05-26%2C%20a%CC%80s%2016.41.33-p-500.png",
    date: "2021-10-10",
  },
  {
    country: "India",
    pledge: "Donate 1000 masks",
    image:
      "https://assets-global.website-files.com/651a753c0bc91f8db5b635af/66535e2628aa81a1477ae28f_IMAGE%202024-05-26%2017%3A06%3A05-p-500.jpg",
    date: "2021-10-10",
  },
  {
    country: "India",
    pledge: "Donate 1000 masks",
    image:
      "https://assets-global.website-files.com/651a753c0bc91f8db5b635af/66535c5c81dcc3573692f6ef_Captura%20de%20ecra%CC%83%202024-05-26%2C%20a%CC%80s%2016.58.43.png~bak-p-500.png",
    date: "2021-10-10",
  },
  {
    country: "India",
    pledge: "Donate 1000 masks",
    image:
      "https://assets-global.website-files.com/651a753c0bc91f8db5b635af/66535883993989ea2d00ea7b_Captura%20de%20ecra%CC%83%202024-05-26%2C%20a%CC%80s%2016.41.33-p-500.png",
    date: "2021-10-10",
  },
  {
    country: "India",
    pledge: "Donate 1000 masks",
    image:
      "https://assets-global.website-files.com/651a753c0bc91f8db5b635af/66535883993989ea2d00ea7b_Captura%20de%20ecra%CC%83%202024-05-26%2C%20a%CC%80s%2016.41.33-p-500.png",
    date: "2021-10-10",
  },
];

const OurPledges = () => {
  return (
    <div id="pledges" className="lg:my-48">
      <Title
        title="OUR PLEDGES"
        subTitle="Community PLEDGES"
        description="Explore all the upcoming community events, workshops, and gatherings. Stay informed and engaged with what's happening."
      />
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {pledges.map((pledge, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#212126] rounded-md pt-5 mb-12">
                <div className="text-center py-4">
                  <p className="text-white font-secondary">
                    {pledge.country}
                  </p>
                  <h2 className="text-white font-primary text-xl lg:text-3xl font-bold py-2">
                    {pledge.pledge}
                  </h2>
                  <p className="text-gray-300 font-secondary">{pledge.date}</p>
                </div>
                <div className="relative">
                  <div className="card_fade-in"/>

                  <img
                    src={pledge.image}
                    alt="pledge"
                    className="w-full h-[500px] object-cover object-center rounded-md mb-5"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default OurPledges;
