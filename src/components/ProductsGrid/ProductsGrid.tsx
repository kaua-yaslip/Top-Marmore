"use client";

import Reveal from "@/components/ui/Reveal";
import styles from "@/app/(paginas)/produtos/pedras-industrializadas/pedras-industrializadas.module.scss";

type Item = { name: string; image: string };

export default function ProductsGrid({ products }: { products: Item[] }) {
  return (
    <section className={styles.productsGrid} aria-label="Produtos disponíveis">
      {products.map((p, i) => (
        // className={styles.revealItem}
        <Reveal key={p.name} delay={i * 0.04} >
          <div className={styles.productCard}>
            <div
              className={styles.productImg}
              style={{ backgroundImage: `url(${p.image})` }}
              aria-hidden="true"
            />
            <div className={styles.productName}>{p.name}</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
