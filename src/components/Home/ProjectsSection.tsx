"use client";

import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const stones = [
  { name: "Granito Azul Bahia", img: "/Imagens/granitoazulbahia.jpg" },
  { name: "Granito Extreme White", img: "/Imagens/granitoextremewhite.jpg" },
  { name: "Granito Preto Via Lactea", img: "/Imagens/granitopretovialactea.jpg" },
  { name: "Mármore Arco Íris", img: "/Imagens/marmorearcoiris.jpg" },
  { name: "Mármore Fossile Black", img: "/Imagens/marmorefossileblack.jpg" },
  { name: "Mármore branco", img: "/Imagens/marmorebranco.jpg" },
  { name: "Quartzito Da Vinci", img: "/Imagens/quartzitodavinci.jpg" },
  { name: "Quartzito Mirage", img: "/Imagens/quartzitomirage.jpg" },
  { name: "Quartzito Incognitus", img: "/Imagens/quartzitoincognitus.jpg" }, 
];

export default function ChooseYourStone() {
  // duplicar ajuda a ficar “infinito” sem buracos
  const data = [...stones, ...stones];

  return (
    <section className="choose-stone" aria-label="Escolha sua pedra">
      <div className="choose-stone__bg" />

      <div className="choose-stone__container">
        <div className="choose-stone__header">
          <div className="choose-stone__eyebrow">ESCOLHA SUA PEDRA</div>
          <h2 className="choose-stone__title">
            Beleza vinda da terra <br />
            uma coleção de elegância  <br />
            atemporal e beleza<br />
          </h2>
        </div>

        <div className="choose-stone__strip">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop
            slidesPerView={"auto"}
            spaceBetween={28}
            grabCursor
            allowTouchMove
            freeMode={{ enabled: true, momentum: true }}
            speed={1500} 
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            className="choose-stone__swiper"
          >
            {data.map((s, idx) => (
              <SwiperSlide key={`${s.name}-${idx}`} className="choose-stone__slide">
                <div className="stone-card">
                  <div className="stone-card__img">
                    <NextImage
                      src={s.img}
                      alt={s.name}
                      width={220}
                      height={220}
                      quality={95}
                    />
                  </div>
                  <div className="stone-card__name">{s.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
