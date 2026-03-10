"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  durationMs?: number; // tempo total da animação
  start?: number;      // valor inicial
  suffix?: string;     // ex: "+"
  className?: string;
};

export default function CountUp({
  to,
  durationMs = 1200,
  start = 0,
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const stepTime = useMemo(() => {
    const steps = Math.max(1, to - start);
    return Math.max(16, Math.floor(durationMs / steps)); // mínimo ~1 frame
  }, [durationMs, start, to]);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let current = start;
    setValue(current);

    const id = window.setInterval(() => {
      current += 1;
      if (current >= to) {
        current = to;
        setValue(current);
        window.clearInterval(id);
        return;
      }
      setValue(current);
    }, stepTime);

    return () => window.clearInterval(id);
  }, [hasStarted, start, stepTime, to]);

  return (
    <span ref={ref} className={className}>
      {value}
      {value === to ? suffix : ""}
    </span>
  );
}
