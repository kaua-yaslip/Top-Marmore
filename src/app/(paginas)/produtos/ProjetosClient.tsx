"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./projetos.module.scss";

type Categoria =
  | "Todos"
  | "Cozinhas"
  | "Banheiros"
  | "Área Gourmet"
  | "Revestimentos";

type Projeto = {
  slug: string;
  titulo: string;
  categoria: Exclude<Categoria, "Todos">;
  resumo: string;
  capa: string;
  tags: string[];
};

const PROJETOS: Projeto[] = [
  {
    slug: "cozinha-moderna-detalhes-em-pedra",
    titulo: "Cozinha moderna com detalhes em pedra",
    categoria: "Cozinhas",
    resumo: "Bancada com acabamento premium e composição clean para o dia a dia.",
    capa: "/Imagens/projetos1.jpg",
    tags: ["bancada", "cozinha", "acabamento"],
  },
  {
    slug: "lavabo-minimalista-em-marmore",
    titulo: "Lavabo minimalista em mármore",
    categoria: "Banheiros",
    resumo: "Peças sob medida, recortes precisos e estética elegante.",
    capa: "https://topmarmore.com.br/wp-content/uploads/2020/09/Leo-Shehtmann.jpg",
    tags: ["lavabo", "mármore", "sob medida"],
  },
  {
    slug: "area-gourmet-com-bancada-resistente",
    titulo: "Área gourmet com bancada resistente",
    categoria: "Área Gourmet",
    resumo: "Material ideal para uso intenso, com visual sofisticado.",
    capa: "https://topmarmore.com.br/wp-content/uploads/2020/09/Ricardo-Hubner-2.jpg",
    tags: ["gourmet", "bancada", "resistência"],
  },
  {
    slug: "parede-revestida-com-pedra",
    titulo: "Revestimento em pedra para destaque",
    categoria: "Revestimentos",
    resumo: "Textura e presença para valorizar o ambiente com sobriedade.",
    capa: "https://topmarmore.com.br/wp-content/uploads/2020/11/Menfi-Arquitetos-2.jpg",
    tags: ["revestimento", "parede", "destaque"],
  },
];

const CATEGORIAS: Categoria[] = [
  "Todos",
  "Cozinhas",
  "Banheiros",
  "Área Gourmet",
  "Revestimentos",
];

export default function ProjetosClient() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("Todos");

  const projetosFiltrados = useMemo(() => {
    if (categoriaAtiva === "Todos") return PROJETOS;
    return PROJETOS.filter((p) => p.categoria === categoriaAtiva);
  }, [categoriaAtiva]);

  return (
    <section className={styles.page}>
      <div className={`base ${styles.container}`}>
        <header className={styles.header}>
          <div>
            <p className={styles.subtitle}>
              <span aria-hidden="true">🧩</span>
              Trabalhos e aplicações com acabamento premium.
            </p>

            <div className={styles.filters} aria-label="Filtros">
              {CATEGORIAS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategoriaAtiva(c)}
                  className={`${styles.filterPill} ${categoriaAtiva === c ? styles.activeFilter : ""}`}
                  aria-pressed={categoriaAtiva === c}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.headerActions}>
            <Link href="/contato" className={styles.primaryBtn}>
              <span aria-hidden="true">💬</span> Solicitar orçamento
            </Link>
          </div>
        </header>

        <section className={styles.grid} aria-label="Lista de projetos">
          {projetosFiltrados.length > 0 ? (
            projetosFiltrados.map((p) => (
              <Link key={p.slug} href={`/projetos/${p.slug}`} className={styles.card}>
                <div
                  className={styles.cardImg}
                  style={{ backgroundImage: `url(${p.capa})` }}
                  aria-hidden="true"
                />

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.badge}>{p.categoria}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </div>

                  <h3 className={styles.title}>{p.titulo}</h3>
                  <p className={styles.desc}>{p.resumo}</p>

                  <div className={styles.tags}>
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className={styles.emptyState}>
              Nenhum projeto encontrado para a categoria <strong>{categoriaAtiva}</strong>.
            </p>
          )}
        </section>

        <footer className={styles.footer}>
          <div className={styles.tip}>
            <span className={styles.tipIcon} aria-hidden="true">
              💡
            </span>
            <div>
              <strong>Dica:</strong> me diga o ambiente e o estilo (moderno, clássico, industrial)
              que eu te indico a melhor pedra e acabamento.
            </div>
          </div>

          <div className={styles.footerActions}>
            <Link href="/produtos/pedras-industrializadas" className={styles.ghostBtn}>
              <span aria-hidden="true">🧱</span> Ver industrializadas
            </Link>
            <Link href="/produtos/pedras-naturais" className={styles.ghostBtn}>
              <span aria-hidden="true">🏔️</span> Ver naturais
            </Link>
            <Link href="/contato" className={styles.primaryBtn}>
              <span aria-hidden="true">📩</span> Falar com a equipe
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}