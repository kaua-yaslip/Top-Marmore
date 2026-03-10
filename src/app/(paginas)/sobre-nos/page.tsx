import PageHero from "@/components/PageHero/PageHero";
import AboutStory from "@/components/AboutStory/AboutStory";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

export default function SobreNosPage() {
  return (
    <main>
      <PageHero
        title="Sobre nós"
        bgImage="/imagens/about-hero.jpg"
        subtitle="Conheça a Top Mármore e nossos diferenciais em pedras e revestimentos."
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        <AboutStory />
        <WhyChoose />
      </div>
    </main>
  );
}
