"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  { name: "Amanda R.", text: "Acabamento impecável. O corte e a instalação ficaram perfeitos." },
  { name: "Carlos M.", text: "Equipe muito profissional e prazo cumprido. Recomendo." },
  { name: "Fernanda S.", text: "Atendimento excelente e qualidade premium no mármore." },
];

export default function TestimonialsCarousel() {
  return (
    <section className="testimonials">
      <div className="base">
        <Reveal>
          <div className="header">
            <div className="title-main">DEPOIMENTOS</div>
            <h2>O que nossos clientes dizem</h2>
          </div>
        </Reveal>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{ 900: { slidesPerView: 2 } }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <article className="tcard">
                <p className="text">“{t.text}”</p>
                <p className="name">{t.name}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
