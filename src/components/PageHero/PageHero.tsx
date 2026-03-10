import styles from "./PageHero.module.scss";
import Link from "next/link";

type Props = {
  title: string;
  bgImage: string;       // ex: "/images/about-hero.jpg"
  subtitle?: string;     // opcional
};

export default function PageHero({ title, bgImage, subtitle }: Props) {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.sep}>›</span>
          <span aria-current="page">{title}</span>
        </nav>
      </div>
    </section>
  );
}
