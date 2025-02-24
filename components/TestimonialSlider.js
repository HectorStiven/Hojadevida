// testimonial data
const testimonialData = [
  {
    image: "/Clientes/cormacarena.png",
    name: "Cormacarena",
    position: "Empresa especializada en el medio ambiente",
    message:
      "Cormacarena se dedica a la conservación y protección del medio ambiente, brindando soluciones sostenibles para el desarrollo.",
  },
  {
    image: "/Clientes/Carriel beer.jpg",
    name: "Carriel Beer",
    position: "Discoteca",
    message:
      "Carriel Beer es un lugar nocturno vibrante, ideal para disfrutar de música y buena compañía en un ambiente festivo.",
  },
  {
    image: "/Clientes/Megafiestas.jpg",
    name: "Megafiestas",
    position: "Empresa de inventarios de equipos de efectos especiales",
    message:
      "Megafiestas ofrece servicios de inventario y suministro de equipos de efectos especiales para eventos memorables.",
  },
  {
    image: "/Clientes/macarenia.jpg",
    name: "Macarenia",
    position: "Desarrollo web",
    message:
      "Macarenia se especializa en el desarrollo web, creando soluciones digitales efectivas y personalizadas para sus clientes.",
  },
  {
    image: "/Clientes/Ucompensar.jpg",
    name: "Biblioteca Compensar",
    position: "Biblioteca",
    message:
      "Biblioteca Compensar promueve el conocimiento y la cultura, ofreciendo una amplia gama de recursos y servicios a la comunidad. ",
  },
  {
    image: "/Clientes/colpegaus.webp",
    name: "Colpegasus",
    position: "Regulador de plataformas escolares",
    message:
      "Colpegasus maneja y regula la plataforma de diversos colegios, asegurando una educación de calidad y recursos accesibles.",
  },
  {
    image: "/Clientes/papelfantasia.png",
    name: "Papel y Fatasia",
    position: "Papeleria y jugueteria",
    message:
      "reconocida distribuidora de papelería y juguetes, ofreciendo una amplia variedad de productos para todas las edades.",
  },
];

const numeros=[1,2,3];


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true} // Debes utilizar "navigation" en minúsculas
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="md-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  {/* FaQuoteLeft */}
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* mensaje */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
