import Banner from "@/components/Home/Banner";
import StatsStrip from "@/components/Home/StatsStrip";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ProjectsCarousel from "@/components/Home/ProjectsCarousel";
import GalleryLightbox from "@/components/Home/GalleryLightbox";
import TestimonialsCarousel from "@/components/Home/TestimonialsCarousel";
import ProjectsSection from "@/components/Home/ProjectsSection";
import "@/styles/index.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <StatsStrip />
      <FeaturedProjects />
      <ProjectsSection />
      <ProjectsCarousel />
      <GalleryLightbox />
      <TestimonialsCarousel />
    </>
  );
}
