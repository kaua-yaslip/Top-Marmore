import "@/styles/contratadas.scss";
import { notFound } from "next/navigation";
import pagesData from "@/data/pagesData"; // Conteúdo das Páginas
import TitlePage from "@/components/TitlePage";
import ImageGallery from "@/components/Contratadas/ImagensContratadas";
import Sidebar from "@/components/Contratadas/Sidebar";
import SaibaMais from "@/components/Contratadas/SaibaMais/SaibaMais";
import MaisVisitadas from "@/components/Contratadas/MaisVisitadas";
import TagsPagina from "@/components/Contratadas/TagsPagina";
import DireitosAutorais from "@/components/Contratadas/DireitosAutorais";
import OutrosAssuntos from "@/components/Contratadas/OutrosAssuntos";
import { includes } from "@/settings/settings";

/**
 * Slugs que são rotas reais do site e NÃO devem ser tratados como "contratada".
 * Isso evita que /projetos, /produtos, /contato etc. caiam aqui e virem 404.
 */
const RESERVED_SLUGS = new Set([
  "projetos",
  "mostras-decoracao",
  "produtos",
  "contato",
  "exemplo",
  "informacoes",
  "mapa-site",
  "sobre-nos",
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ contratada: string }>;
}) {
  const { contratada } = await params;

  // Se for rota reservada, não gera metadata aqui
  if (RESERVED_SLUGS.has(contratada)) return {};

  const page = pagesData.find((p) => p.contratada === contratada);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.contratada,
    },
    openGraph: {
      url: page.contratada,
      title: page.title,
      description: page.description,
      images: [
        {
          url: "/logo.webp",
          width: 300,
          height: 200,
          alt: page.title,
        },
      ],
      type: "website",
      locale: "pt_BR",
      region: "Brasil",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ contratada: string }>;
}) {
  const { contratada } = await params;

  // Se for rota reservada, não trata como "contratada"
  // (deixa o Next resolver pela rota real, ex.: /projetos/page.tsx)
  if (RESERVED_SLUGS.has(contratada)) {
    return notFound();
  }

  const page = pagesData.find((p) => p.contratada === contratada);

  if (!page) {
    return notFound();
  }

  return (
    <>
      <TitlePage title={page.palavra} />
      <main className="container-contratadas">
        <div className="base">
          <div className="info-contratadas">
            <div className="imgs-contratadas">
              <ImageGallery
                className="img-responsive"
                contratada={contratada}
                imageCount={page.imageCount}
              />
            </div>
            <h2>{page.palavra}</h2>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </div>
          <Sidebar />
        </div>

        <div className="base-includes">
          {includes.SaibaMais && <SaibaMais title={page.palavra} />}
          {includes.OutrosAssuntos && <OutrosAssuntos title={page.palavra} />}
          {includes.MaisVisitados && <MaisVisitadas />}
          {includes.TagsPagina && <TagsPagina tags={page.keywords} />}
          {includes.Copyright && <DireitosAutorais title={page.palavra} />}
        </div>
      </main>
    </>
  );
}
