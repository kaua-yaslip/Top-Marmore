import PageHero from "@/components/PageHero/PageHero";
import ProjetosClient from "./ProjetosClient";

export const metadata = {
  title: "Projetos | Top Mármore",
  description: "Veja alguns projetos e aplicações em pedras naturais e industrializadas.",
};

export default function ProjetosPage() {
  return (
    <main>
      <PageHero
        title="Projetos"
        bgImage="/imagens/produtos.jpg"
        subtitle="Veja alguns trabalhos e aplicações com acabamento premium."
      />

      <ProjetosClient />
    </main>
  );
}