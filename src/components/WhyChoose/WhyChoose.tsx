"use client";

import styles from "./WhyChoose.module.scss";
import {
  Factory,
  Store,
  BadgeCheck,
  ShieldCheck,
  Wrench,
  Layers3,
  Gem,
  Timer,
  GraduationCap,
  Handshake,
  Gift,
  Briefcase,
  Leaf,
  HeartHandshake,
  Users,
} from "lucide-react";

type Benefit = {
  title: string;
  subtitle?: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const benefits: Benefit[] = [
  { title: "Fabricação própria", Icon: Factory },
  { title: "Showroom diferenciado", Icon: Store },
  { title: "Garantia de 10 anos", subtitle: "Para pedra natural*", Icon: BadgeCheck },
  { title: "Garantia de instalação estendida", subtitle: "Até 1 ano**", Icon: ShieldCheck },
  { title: "Manutenção preventiva", subtitle: "Consultoria por 2 anos", Icon: Wrench },
  { title: "Melhores marcas", subtitle: "Revestimentos selecionados", Icon: Layers3 },
  { title: "Materiais exclusivos", subtitle: "Linhas assinadas", Icon: Gem },
  { title: "Entrega reduzida", subtitle: "Em até 10 dias***", Icon: Timer },
  { title: "TOPTEC", subtitle: "Suporte técnico para arquitetos", Icon: GraduationCap },
  { title: "Apoio ao arquiteto", subtitle: "Parcerias e benefícios", Icon: Handshake },
  { title: "Clube de vantagens", subtitle: "Para profissionais", Icon: Gift },
  { title: "Plano de carreira", subtitle: "Para colaboradores", Icon: Briefcase },
  { title: "Sustentabilidade", subtitle: "Processos conscientes", Icon: Leaf },
  { title: "Responsabilidade social", Icon: HeartHandshake },
  { title: "Clube dos marmoristas", subtitle: "Benefícios exclusivos****", Icon: Users },
];

export default function WhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Diferenciais</p>
          <h2 id="why-choose-title" className={styles.title}>
            Por que escolher a <span>Top Mármore</span>?
          </h2>
          <p className={styles.lead}>
            Uma experiência premium do primeiro atendimento à entrega e pós-obra.
          </p>
        </header>

        <div className={styles.grid}>
          {benefits.map(({ title, subtitle, Icon }, i) => (
            <article
              key={i}
              className={styles.card}
              // style={{ ["--d" as any]: `${i * 40}ms` }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <Icon size={18} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{title}</h3>
                {subtitle && <p className={styles.cardText}>{subtitle}</p>}
              </div>
            </article>
          ))}
        </div>

        <footer className={styles.footerNote}>
          <small>
            * Consulte condições. ** Válido para serviços elegíveis. *** Prazo sujeito a disponibilidade. **** Benefícios
            podem variar.
          </small>
        </footer>
      </div>
    </section>
  );
}
