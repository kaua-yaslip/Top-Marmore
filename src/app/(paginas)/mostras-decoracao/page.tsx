"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./mostras.module.scss";
import Image from "next/image";

type Mostra = {
  slug: string;
  nome: string;
  imagem: string;
};

const MOSTRAS: Mostra[] = [
  { slug: "mostra-01", nome: "Leo Shehtman", imagem: "/Imagens/mostras1.jpg" },
  { slug: "mostra-02", nome: "Leo Shehtman", imagem: "/Imagens/mostras2.jpg" },
  { slug: "mostra-03", nome: "Leo Shehtman", imagem: "/Imagens/mostras3.jpg" },
  { slug: "mostra-04", nome: "Daniela Colnaghi", imagem: "/Imagens/mostras4.jpg" },
  { slug: "mostra-05", nome: "Ticiane Lima", imagem: "/Imagens/mostras5.jpg" },
  { slug: "mostra-06", nome: "Ticiane Lima", imagem: "/Imagens/mostras6.jpg" },
  { slug: "mostra-07", nome: "Ticiane Lima", imagem: "/Imagens/mostras7.jpg" },
  { slug: "mostra-08", nome: "Czhott Arquitetura", imagem: "/Imagens/mostras8.jpg" },
  { slug: "mostra-09", nome: "Czhott Arquitetura", imagem: "/Imagens/mostras9.jpg" },
  { slug: "mostra-10", nome: "Ricardo Abreu", imagem: "/Imagens/mostras10.jpg" },
  { slug: "mostra-11", nome: "Leo Shehtman", imagem: "/Imagens/mostras11.jpg" },
  { slug: "mostra-12", nome: "Leo Shehtman", imagem: "/Imagens/mostras12.jpg" },
  { slug: "mostra-13", nome: "Paula Leme e Luciana Bicheri", imagem: "/Imagens/mostras13.jpg" },
  { slug: "mostra-14", nome: "Marilia Pelegrini", imagem: "/Imagens/mostras14.jpg" },
  { slug: "mostra-15", nome: "Leo Shehtman", imagem: "/Imagens/mostras15.jpg" },
  { slug: "mostra-16", nome: "Leo Shehtman", imagem: "/Imagens/mostras16.jpg" },
  { slug: "mostra-17", nome: "Leo Shehtman", imagem: "/Imagens/mostras17.jpg" },
  { slug: "mostra-18", nome: "Adriana Scartaris e Semara Brito", imagem: "/Imagens/mostras18.jpg" },
  { slug: "mostra-19", nome: "Rodrigo Kolton", imagem: "/Imagens/mostras19.jpg" },
];

export default function MostrasDecoracaoPage() {
  return (
    <>
      <PageHero
        title="Mostras de decoração"
        bgImage="/imagens/produtos.jpg"
        subtitle="Participações e projetos especiais com acabamento premium."
      />

      <main className={styles.page}>
        <div className={styles.container}>
          <p className={styles.subtitle}>
            Participações e projetos especiais com acabamento premium.
          </p>

          <section className={styles.grid}>
            {MOSTRAS.map((m, index) => (
              <motion.a
                key={m.slug}
                href={`/mostras-decoracao/${m.slug}`}
                className={styles.card}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.thumb}>
                  <Image src={m.imagem} alt={m.nome} width={300} height={200} quality={100} />
                </div>

                <div className={styles.cardLabel}>{m.nome}</div>
              </motion.a>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}