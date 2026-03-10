import PageHero from "@/components/PageHero/PageHero";
import styles from "./exemplo.module.scss";
import Link from "next/link";

const produtos = [
  { title: "Pedras industrializadas", href: "/produtos/pedras-industrializadas" },
  { title: "Pedras naturais", href: "/produtos/pedras-naturais" },
];

const obras = [
  { title: "Projetos", href: "/projetos" },
  { title: "Mostras de decoração", href: "/mostras-decoracao" }
];

export default function ExemploPage() {
  return (
    <main>
      <PageHero
        title="Produtos & Obras"
        bgImage="/imagens/produtos.jpg" // pode trocar depois
        subtitle="Explore nossas categorias principais."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            {/* Produtos */}
            <div className={styles.group}>
              <h2 className={styles.h2}>Produtos</h2>
              <p className={styles.p}>
                Selecione o tipo de material para ver opções, acabamentos e aplicações.
              </p>

              <div className={styles.cards}>
                {produtos.map((item) => (
                  <Link key={item.title} href={item.href} className={styles.card}>
                    <span className={styles.cardTitle}>{item.title}</span>
                    <span className={styles.cardArrow} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Obras */}
            <div className={styles.group}>
              <h2 className={styles.h2}>Obras</h2>
              <p className={styles.p}>
                Veja nossos trabalhos finalizados e participações em mostras.
              </p>

              <div className={styles.cards}>
                {obras.map((item) => (
                  <Link key={item.title} href={item.href} className={styles.card}>
                    <span className={styles.cardTitle}>{item.title}</span>
                    <span className={styles.cardArrow} aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
