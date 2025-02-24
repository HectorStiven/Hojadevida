import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Back_End",
    description: "Manejo del framework Django.",
  },
  {
    icon: <RxDesktop />,
    title: "Front-End",
    description: "Manejo del framework React y next.js .",
  },
  {
    icon: < RxPencil2/>,
    title: "Diseño",
    description: "manejo de herramientas de diseño Photoshop.",
  },
  {
    icon: <RxReader />,
    title: "Modelado De Datos",
    description: "Manejo de bases de datos en PostgreSQL.",
  },
  {
    icon: <RxRocket />,
    title: "Despliegue",
    description: "Experiencia desplegando sitios web.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => 
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">{item.icon}</div>
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <div className="max-w-[350px] leading-normal">{item.description}</div>
            </div>
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  );
};

export default ServiceSlider;
