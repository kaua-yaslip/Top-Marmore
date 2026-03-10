"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="banner">
      <Swiper
        modules={[Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className={`slide-item banner-1 ${activeIndex === 0 ? "is-active" : ""}`}>
            <div className="texto">
              <h2 className="reveal r1">
                PEDRAS NATURAIS E EXÓTICAS EXCLUSIVAS
              </h2>
              <p className="reveal r2">
                AQUI VOCÊ ENCONTRA UMA LINHA DE PRODUTOS NATURAIS PARA DEIXAR O SEU PROJETO ÚNICO.
              </p>
              <a className="reveal r3" href="#sobre">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className={`slide-item banner-2 ${activeIndex === 1 ? "is-active" : ""}`}>
            <div className="texto">
              <h2 className="reveal r1">PEDRAS INDUSTRIALIZADAS</h2>
              <p className="reveal r2">
                SELECIONAMOS AS MELHORES MARCAS DE PEDRAS INDUSTRIALIZADAS DO MERCADO.
                SOMOS FORNECEDORES OFICIAIS DE SILESTONE E DEKTON.
              </p>
              <a className="reveal r3" href="#sobre">
                SAIBA MAIS
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
