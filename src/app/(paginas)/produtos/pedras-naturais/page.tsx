import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./pedras-naturais.module.scss";

export const metadata = {
  title: "Pedras naturais | Top Mármore",
  description: "Granitos, Mármores e Pedras Exóticas — opções e aplicações.",
};

type Item = {
  title: string;
  desc: string;
  href: string;
  icon: string;
  tag: string;
};

const itens: Item[] = [
  {
    title: "Granitos",
    desc: "Versatilidade, resistência e variedade de cores para bancadas e pisos.",
    href: "/produtos/granitos/geral",
    icon: "🧱",
    tag: "Resistência",
  },
  {
    title: "Mármores",
    desc: "Elegância e acabamento sofisticado para ambientes internos e decoração.",
    href: "/produtos/marmores/geral",
    icon: "✨",
    tag: "Sofisticação",
  },
  {
    title: "Pedras Exóticas",
    desc: "Materiais exclusivos com veios e padrões únicos para projetos especiais.",
    href: "/produtos/pedras-exoticas/geral",
    icon: "🌿",
    tag: "Exclusividade",
  },
];

export default function PedrasNaturaisPage() {
  return (
    <main>
      <PageHero
        title="Pedras naturais"
        bgImage="/imagens/produtos.jpg"
        subtitle="Granitos, mármores e pedras exclusivas para projetos sofisticados."
      />

      <section className={styles.page}>
        <div className={`base ${styles.container}`}>
          <header className={styles.header}>
            <p className={styles.subtitle}>
              <span aria-hidden="true">🧭</span>
              Selecione uma categoria para ver opções, acabamentos e aplicações.
            </p>

            <Link href="/contato" className={styles.primaryBtn}>
              <span aria-hidden="true">💬</span> Solicitar orçamento
            </Link>
          </header>

          <section className={styles.grid} aria-label="Categorias de pedras naturais">
            {itens.map((i) => (
              <Link key={i.href} href={i.href} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.icon} aria-hidden="true">
                    {i.icon}
                  </div>
                  <span className={styles.tag}>{i.tag}</span>
                </div>

                <h3 className={styles.title}>{i.title}</h3>
                <p className={styles.desc}>{i.desc}</p>

                <div className={styles.cardCta}>
                  Ver opções <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </section>

          <footer className={styles.footer}>
            <div className={styles.tip}>
              <span aria-hidden="true" className={styles.tipIcon}>
                💡
              </span>
              <div>
                <strong>Dica:</strong> granitos são ótimos para uso intenso; mármores brilham em
                ambientes internos; exóticas elevam projetos especiais.
              </div>
            </div>

            <div className={styles.footerActions}>
              <Link href="/produtos/pedras-industrializadas" className={styles.ghostBtn}>
                <span aria-hidden="true">🧱</span> Ver pedras industrializadas
              </Link>
              <Link href="/contato" className={styles.primaryBtn}>
                <span aria-hidden="true">📩</span> Falar com a equipe
              </Link>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}