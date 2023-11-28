import styles from "../styles/Hero.module.css";
import { useState, useEffect } from "react";



export default function ServiceHero({ service }) {
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window?.innerHeight;
      const percentScroll = window.scrollY / windowHeight;
      if (percentScroll > 0) {
        setStartScroll(true);
      } else {
        setStartScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={styles.wrapper__client}
        style={{
          backgroundImage: `url('https:${service.fields.featuredImage.fields.file.url}')`,
        }}
      />
      <div className={`${styles.wrapper__title}`}>
        <h1 className={`${styles.client__title} ${styles.description__last}`}>{service.fields.title}</h1>
      </div>
    </>
  );
}
