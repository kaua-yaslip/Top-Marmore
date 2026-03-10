import Link from "next/link";
import { notFound } from "next/navigation";
import TitlePage from "@/components/TitlePage";
import styles from "./projeto.module.scss";

type Projeto = {
  slug: string;
  titulo: string;
  categoria: string;
  resumo: string;
  capa: string;
  imagens: string[];
};

const PROJETOS: Projeto[] = [
  {
    slug: "cozinha-moderna-detalhes-em-pedra",
    titulo: "Cozinha moderna com detalhes em pedra",
    categoria: "Cozinhas",
    resumo: "Bancada com acabamento premium e composição clean para o dia a dia.",
    capa: "/Imagens/projetos1.jpg",
    imagens: [
      "/Imagens/projetos1.jpg",
      "/Imagens/g2.jpg",
      "/Imagens/g3.jpg",
    ],
  },
  {
    slug: "lavabo-minimalista-em-marmore",
    titulo: "Lavabo minimalista em mármore",
    categoria: "Banheiros",
    resumo: "Peças sob medida, recortes precisos e estética elegante.",
    capa:  "/Imagens/capabaheiro.jpg",
    imagens: [
      "/Imagens/capabaheiro.jpg",
      "/Imagens/banheiro2.jpg",
      "/Imagens/banheiro3.jpg",
    ],
  },
  {
    slug: "area-gourmet-com-bancada-resistente",
    titulo: "Área gourmet com bancada resistente",
    categoria: "Área Gourmet",
    resumo: "Material ideal para uso intenso, com visual sofisticado.",
    // cover updated to match the new gallery
    capa: "/Imagens/capaarea.jpg",
    imagens: [
      "/Imagens/capaarea.jpg",
      "/Imagens/area4.jpg",
      "/Imagens/area3.jpg",
    ],
  },
  {
    slug: "parede-revestida-com-pedra",
    titulo: "Revestimento em pedra para destaque",
    categoria: "Revestimentos",
    resumo: "Textura e presença para valorizar o ambiente com sobriedade.",
    // cover will use the first remaining image
    capa:"/Imagens/capaGourme.jpg",
    imagens: [
      "/Imagens/capaGourme.jpg",
      "/Imagens/Gourme2.jpg",
      "/Imagens/Gourme3.jpg",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = PROJETOS.find((p) => p.slug === slug);
  if (!projeto) return {};
  return {
    title: `${projeto.titulo} | Projetos`,
    description: projeto.resumo,
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = PROJETOS.find((p) => p.slug === slug);

  if (!projeto) return notFound();

  return (
    <>
      <TitlePage title={projeto.titulo} />

      <main className={styles.page}>
        <div className={`base ${styles.container}`}>
          <div className={styles.top}>
            <div>
              <span className={styles.badge}>{projeto.categoria}</span>
              <p className={styles.desc}>{projeto.resumo}</p>

              <div className={styles.actions}>
                <Link href="/contato" className={styles.primaryBtn}>
                  <span aria-hidden="true">💬</span> Solicitar orçamento
                </Link>
                <Link href="/projetos" className={styles.ghostBtn}>
                  ← Voltar para projetos
                </Link>
              </div>
            </div>

            <div
              className={styles.cover}
              style={{ backgroundImage: `url(${projeto.capa})` }}
              aria-hidden="true"
            />
          </div>

          <h2 className={styles.h2}>Galeria</h2>
          <section className={styles.grid}>
            {projeto.imagens.map((src) => (
              <div key={src} className={styles.item}>
                <a href={src} target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                  <div
                    className={styles.img}
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </a>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}