"use client";

import { useMemo, useState } from "react";
import styles from "./VideoHero.module.scss";

type Props = {
  posterSrc?: string;     // imagem (background)
  videoSrc?: string;      // mp4 (se quiser abrir direto mp4)
  youtubeUrl?: string;    // ou url do youtube (embed)
  title?: string;         // texto grande (TopMarmore)
};

export default function VideoHero({
  posterSrc = "/images/video-poster.jpg",
  videoSrc,
  youtubeUrl,
  title = "TopMarmore",
}: Props) {
  const [open, setOpen] = useState(false);

  const embedUrl = useMemo(() => {
    if (!youtubeUrl) return "";
    // aceita tanto youtu.be quanto youtube.com/watch?v=
    const id =
      youtubeUrl.includes("youtu.be/")
        ? youtubeUrl.split("youtu.be/")[1]?.split("?")[0]
        : youtubeUrl.split("v=")[1]?.split("&")[0];

    if (!id) return "";
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
  }, [youtubeUrl]);

  const canPlay = Boolean(videoSrc || embedUrl);

  return (
    <>
      <section className={styles.hero} aria-label="Vídeo institucional">
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${posterSrc})` }}
          role="img"
          aria-label="Capa do vídeo"
        />

        <div className={styles.overlay} />

        <button
          className={styles.play}
          type="button"
          onClick={() => canPlay && setOpen(true)}
          aria-label="Reproduzir vídeo"
          disabled={!canPlay}
        >
          <span className={styles.playLabel}>Play</span>
        </button>

        <div className={styles.bigTitle} aria-hidden="true">
          {title}
        </div>
      </section>

      {open && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label="Reprodutor de vídeo"
          onClick={() => setOpen(false)}
        >
          <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.close}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar vídeo"
            >
              ✕
            </button>

            <div className={styles.player}>
              {videoSrc ? (
                <video src={videoSrc} controls autoPlay />
              ) : (
                <iframe
                  src={embedUrl}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Vídeo"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
