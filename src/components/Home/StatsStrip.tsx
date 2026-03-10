"use client";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="base">
        <Reveal>
          <div className="item">
            <h3><CountUp to={25} />+</h3>
            <p>Anos de Experiência</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="item">
            <h3><CountUp to={1200} />+</h3>
            <p>Projetos Entregues</p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="item">
            <h3><CountUp to={100} />%</h3>
            <p>Satisfação</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
