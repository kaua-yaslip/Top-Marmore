"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./mostras.module.scss";
import Image from "next/image";

type Mostra = {
  nome: string;
  imagem: string;
};

const MOSTRAS: Mostra[] = [
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras1.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras2.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras3.jpg" },
  { nome: "Daniela Colnaghi", imagem: "/Imagens/mostras4.jpg" },
  { nome: "Ticiane Lima", imagem: "/Imagens/mostras5.jpg" },
  { nome: "Ticiane Lima", imagem: "/Imagens/mostras6.jpg" },
  { nome: "Ticiane Lima", imagem: "/Imagens/mostras7.jpg" },
  { nome: "Czhott Arquitetura", imagem: "/Imagens/mostras8.jpg" },
  { nome: "Czhott Arquitetura", imagem: "/Imagens/mostras9.jpg" },
  { nome: "Ricardo Abreu", imagem: "/Imagens/mostras10.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras11.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras12.jpg" },
  { nome: "Paula Leme e Luciana Bicheri", imagem: "/Imagens/mostras13.jpg" },
  { nome: "Marilia Pelegrini", imagem: "/Imagens/mostras14.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras15.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras16.jpg" },
  { nome: "Leo Shehtman", imagem: "/Imagens/mostras17.jpg" },
  { nome: "Adriana Scartaris e Semara Brito", imagem: "/Imagens/mostras18.jpg" },
  { nome: "Rodrigo Kolton", imagem: "/Imagens/mostras19.jpg" },
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
              <div key={index} className={styles.card}>
                <div className={styles.thumb}>
                  <Image
                    src={m.imagem}
                    alt={m.nome}
                    width={300}
                    height={200}
                    quality={100}
                  />
                </div>

                <div className={styles.cardLabel}>{m.nome}</div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}