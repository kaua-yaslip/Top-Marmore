import Link from "next/link";
import PageHero from "@/components/PageHero/PageHero";
import styles from "./pedras-industrializadas.module.scss";

export const metadata = {
  title: "Pedras industrializadas | Top Mármore",
  description: "Dekton, Nanoglass e Primes, Silestone — opções e aplicações.",
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
    title: "Dekton",
    desc: "Alta performance para bancadas, fachadas e áreas gourmet.",
    href: "/produtos/dekton/geral",
    icon: "🔥",
    tag: "Alta performance",
  },
  {
    title: "Nanoglass e Primes",
    desc: "Opções claras e elegantes para projetos internos.",
    href: "/produtos/nanoglass-e-primes/geral",
    icon: "✨",
    tag: "Elegância",
  },
  {
    title: "Silestone",
    desc: "Quartzo com durabilidade, baixa porosidade e variedade de cores.",
    href: "/produtos/silestone/geral",
    icon: "🧱",
    tag: "Durabilidade",
  },
];

export default function PedrasIndustrializadasPage() {
  return (
    <main>
      <PageHero
        title="Pedras industrializadas"
        bgImage="/imagens/produtos.jpg"
        subtitle="Selecione uma categoria para ver opções, acabamentos e aplicações."
      />

      <section className={styles.page}>
        <div className={`base ${styles.container}`}>
          <header className={styles.header}>
            <p className={styles.subtitle}>
              <span aria-hidden="true">🧭</span>
              Selecione uma categoria para ver opções, acabamentos e aplicações.
            </p>

            <div className={styles.headerActions}>
              <Link href="/contato" className={styles.primaryBtn}>
                <span aria-hidden="true">💬</span> Solicitar orçamento
              </Link>
            </div>
          </header>

          <section className={styles.grid}>
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
                <strong>Dica:</strong> me diga o ambiente (cozinha, lavabo, área gourmet) que eu
                te ajudo a escolher a melhor opção.
              </div>
            </div>

            <div className={styles.footerActions}>
              <Link href="/produtos/pedras-naturais" className={styles.ghostBtn}>
                <span aria-hidden="true">🪨</span> Ver pedras naturais
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