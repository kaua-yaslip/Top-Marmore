"use client";

import Image from "next/image";
import NextLink from "next/link";
import CountUp from "@/components/Share/CountUp";

export default function About() {
  return (
    <section id="sobre" className="unita-about-light" aria-label="Sobre a Top Mármore">
      <div className="unita-about-light__container">
        {/* LEFT */}
        <div className="unita-about-light__left">
          <div className="unita-about-light__eyebrow">Sobre a gente</div>

          <h2 className="unita-about-light__title">
            Mármore e projetos em
            <br />
            Pedra Natural
          </h2>

          <p className="unita-about-light__text">
            A Top Mármore atua com fornecimento, corte sob medida e instalação de mármores e granitos
            para projetos residenciais e comerciais. Trabalhamos com materiais selecionados,
            acabamento preciso e compromisso com prazo e qualidade.
          </p>

          <ul className="unita-about-light__list">
            <li>Acabamento de alto brilho para maior luminosidade</li>
            <li>Alta durabilidade contra desgaste e uso contínuo</li>
            <li>Superfície antiderrapante quando polida/fosca</li>
          </ul>

          {/* BOTÃO CORRETO */}
          <NextLink href="/sobre-nos" className="unita-about-light__btn">
            Mais sobre nós <span aria-hidden="true">»</span>
          </NextLink>
        </div>

        {/* MIDDLE (25+) */}
        <div className="unita-about-light__mid">
          <div className="unita-about-light__big">
            <CountUp to={25} start={0} suffix="+" durationMs={1500} />
          </div>
          <div className="unita-about-light__sub">Anos de experiência</div>
        </div>

        {/* RIGHT */}
        <div className="unita-about-light__right">
          <Image
            src="/Imagens/mamore2.jpg"
            alt="Ambiente moderno com mármore"
            width={900}
            height={700}
            priority
            className="unita-about-light__heroimg"
          />

          {/* Mosaic */}
          <div className="unita-about-light__mosaic">
            <Image
              src="/Imagens/marmores1.jpg"
              alt="Mosaico de mármores e granitos"
              width={560}
              height={200}
              className="unita-about-light__mosaic-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}