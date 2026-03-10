"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  to: number;
  durationMs?: number;
};

export default function CountUp({ to, durationMs = 1200 }: Props) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  const start = useMemo(() => performance.now(), []);

  useEffect(() => {
    const from = 0;

    const tick = (t: number) => {
      const p = Math.min((t - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [to, durationMs, start]);

  return <>{value}</>;
}
