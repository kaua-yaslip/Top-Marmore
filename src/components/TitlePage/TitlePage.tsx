import { settings } from "@/settings/settings";
import styles from "./TitlePage.module.scss";

const { siteName } = settings;

export default function TitlePage({ title, bgImage }: { title: string; bgImage?: string }) {
  const titleLength = title.length < 20;
  // build inline style for background handling
  const style: React.CSSProperties = {};
  if (bgImage !== undefined) {
    if (bgImage) {
      style.backgroundImage = `url(${bgImage})`;
    } else {
      style.backgroundImage = "none";
    }
  }
  return (
    <div className={styles.titlePage} style={style}>
      {titleLength ? (
        <h1>
          {title}
          <span style={{ position: "absolute", opacity: 0, left: 0 }}>
            {" "}
            - {siteName}
          </span>
        </h1>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
}
