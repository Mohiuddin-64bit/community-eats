import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [{}, {}, {}, {}, {}, {}, {}];

const Testimonial = () => {
  return (
    <section className="testimonial-section relative my-5 lg:my-16">
      <img
        src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      <div className="absolute inset-0 z-10 flex items-center justify-center p-5">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="max-w-6xl"
        >
          {slides.map(() => (
            <SwiperSlide>
              <div className=" rounded-lg pb-12 shadow-lg mx-auto">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-white">John Doe</h4>
                    <p className="text-gray-100">CEO</p>
                  </div>
                </div>
                <p className="text-gray-100 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus at turpis et elit tincidunt aliquam. Integer ac magna
                  sit amet nisi fringilla tincidunt. Donec nec turpis nec metus
                  fermentum fringilla. Nullam auctor, arcu nec ultricies
                  ultricies, risus velit tincidunt nunc, a ultricies purus metus
                  a enim. Sed nec felis nec risus ultricies ultricies. Sed nec
                  felis nec risus ultricies ultricies.
                </p>
                <div>
                  <p className="text-gray-100">⭐⭐⭐⭐</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
