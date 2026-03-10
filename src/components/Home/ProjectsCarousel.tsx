"use client";

import NextImage from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // 🔥 sem Navigation (remove as setas)
import "swiper/css";
import "swiper/css/pagination";
import Reveal from "@/components/ui/Reveal";

type Project = { title: string; image: string; tag: string };

const projects: Project[] = [
  { title: "Bancadas em Granito", tag: "Cozinhas", image: "/Imagens/bancadaemgranito.jpg" },
  { title: "Revestimento em Mármore", tag: "Banheiros", image: "/Imagens/revestimentoemmarmore.jpg" },
  { title: "Escadas em Mármore", tag: "Interiores", image: "/Imagens/escadaemmarmore.jpg" },
  { title: "Pisos & Paginação", tag: "Ambientes", image: "/Imagens/pisoemmarmore.jpg" },
  { title: "Painéis & Lareiras", tag: "Projetos", image: "/Imagens/lareira.jpg" },
];

export default function ProjectsCarousel() {
  return (
    <section className="projects-carousel">
      <div className="base">
        <Reveal>
          <div className="header">
            <div className="title-main">PORTFÓLIO</div>
            <h2>Projetos em destaque</h2>
            <p>Acabamento premium em mármore e granito para residências e alto padrão.</p>
          </div>
        </Reveal>

                  <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              observer={true}
              observeParents={true}
              updateOnWindowResize={true}
              spaceBetween={18}
              slidesPerView={1.15}
              breakpoints={{
                640: { slidesPerView: 2.1 },
                1024: { slidesPerView: 3.1 },
              }}
            >
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <article className="card">
                <div className="img">
                  <NextImage
                    src={p.image}
                    alt={p.title}
                    fill
                    className="cardImage"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    quality={90}
                  />
                </div>

                <div className="meta">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
