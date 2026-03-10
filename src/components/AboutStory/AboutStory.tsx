"use client";

import styles from "./AboutStory.module.scss";
import { Target, Eye, Sparkles } from "lucide-react";
import VideoHero from "../VideoHero/VideoHero";


export default function AboutStory() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Sobre nós</p>
          <h1 id="about-title" className={styles.title}>
            Top Mármore <span>arte em revestimentos</span>
          </h1>
          <p className={styles.lead}>
            Qualidade, rigor técnico e uma experiência diferenciada do primeiro atendimento ao pós-obra.
          </p>
        </header>

        <div className={styles.content}>
  {/* TEXTO */}
  <div>
    <article className={styles.block}>
      <h2 className={styles.h2}>Propósito</h2>
      <p className={styles.p}>
        Contribuir para a concretização dos sonhos de nossos clientes com o melhor de nossos serviços,
        proporcionando uma experiência única no ramo de pedras e revestimentos.
        Ser a primeira marca do setor a se propagar em todos os estados, gerando emprego,
        conhecimento técnico e plano de carreira para os colaboradores.
      </p>
    </article>
    

    <article className={styles.block}>
      <h2 className={styles.h2}>Nossa história</h2>
      <p className={styles.p}>
        A Top Mármore nasceu em 2010 com um objetivo audacioso: mudar o conceito de marmoraria no mercado
        e oferecer produtos diferenciados e serviços de alta qualidade.
      </p>
      <p className={styles.p}>
        Em 2014 foi a primeira marmoraria a criar uma mostra de decoração com 14 ambientes decorados e
        assinados por grandes nomes da arquitetura.
      </p>
      <p className={styles.p}>
        Hoje atendemos projetos comerciais, industriais e residenciais em todo o Brasil.
      </p>
    </article>
  </div>

  <div className={styles.video}>
    <VideoHero
      posterSrc="/images/video-poster.jpg"
      youtubeUrl="https://youtu.be/oH2ukrQAXPg"
      title="Top"
    />
  </div>
</div>
{/* style={{ ["--d" as any]: "80ms" }} */}
        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Target size={18} />
            </div>
            <h3 className={styles.cardTitle}>Missão</h3>
            <p className={styles.cardText}>
              Agregar valor às obras de nossos clientes, através de pedras naturais e industrializadas e
              revestimentos de qualidade, com excelência em serviços.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Eye size={18} />
            </div>
            <h3 className={styles.cardTitle}>Visão</h3>
            <p className={styles.cardText}>
              Continuar sendo referência em atendimento, qualidade do produto e pontualidade na execução dos projetos,
              investindo em qualificação e tecnologia.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              <Sparkles size={18} />
            </div>
            <h3 className={styles.cardTitle}>Valores</h3>
            <p className={styles.cardText}>
              Excelência no atendimento, ambiente confortável e inspirador, com profissionais capacitados para entender,
              orientar e entregar o melhor resultado.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
