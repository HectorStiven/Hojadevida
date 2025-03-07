// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Cormacarena",
          path: "/work/Bia.png",
        },
        {
          title: "Cormacarena",
          path: "/work/2.jpg",
        },
        {
          title: "Cormacarena",
          path: "/work/3.jpg",
        },
        {
          title: "Cormacarena",
          path: "/work/4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/work/5.png",
        },
        {
          title: "title",
          path: "/work/6.png",
        },
        {
          title: "title",
          path: "/work/7.png",
        },
        {
          title: "title",
          path: "/work/8.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/work/10.png",
        },
        {
          title: "title",
          path: "/work/11.png",
        },
        {
          title: "title",
          path: "/work/12.png",
        },
        {
          title: "title",
          path: "/work/13.png",
        },
      ],
    },
  ],
};

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[380px] md:h-[540px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className=" relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={450} height={300} alt="" />
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd]
                            opacity-0 group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* Title */}
                      <div
                        className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* titleport */}
                          <div className="delay-100">Sistema</div>
                          <div
                            className="translate-y-[500%] group-hover:translate-y-0
                          transition-all duration-300 delay-150"
                          >
                            {image.title}
                          </div>
                          <div className="text-xl translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
