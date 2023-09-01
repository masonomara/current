import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ClientHero({ client }) {
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
          backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
        }}
      />
      <div className={`${styles.wrapper__title}`}>
        <div className={styles.client__title}>{client.fields.title}</div>
        <div className={`${styles.description}`}>
          <span>INDUSTRY&nbsp;:&nbsp;</span>
          <span className={styles.description}>{client.fields.industry}</span>
        </div>
        <div className={`${styles.description} ${styles.description__last}`}>
          <span>SERVICES&nbsp;:&nbsp;</span>
          {client.fields.services.map((service, index) => (
            <Link
              key={service.fields.id}
              href={`/services/${service.fields.slug}`}
              target="_top"
            >
              <span className={`${styles.service}`}>
                {service.fields.title}
              </span>
              {index < client.fields.services.length - 1 && ", "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
