"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from "@/components/ui/Reveal";

const slides = [
  { src: "/Imagens/g1.jpg" },
  { src: "/Imagens/g2.jpg" },
  { src: "/Imagens/g3.jpg" },
  { src: "/Imagens/g4.jpg" },
  { src: "/Imagens/g5.jpg" },
  { src: "/Imagens/g6.jpg" },
];

export default function GalleryLightbox() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="gallery">
      <div className="base">
        <Reveal>
          <div className="header">
            <div className="title-main">GALERIA</div>
            <h2>Detalhes que fazem diferença</h2>
          </div>
        </Reveal>

        <div className="grid">
          {slides.map((s, i) => (
            <button
              key={s.src}
              className="tile"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              aria-label="Abrir imagem"
            >
              <Image src={s.src} alt="Galeria" width={900} height={900} />
              <span className="hover" />
            </button>
          ))}
        </div>

        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={slides} />
      </div>
    </section>
  );
}
