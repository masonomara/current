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
        className={`${styles.wrapper__client} ${styles.video__wrapper}`}
        style={{
          backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
          ...(client.fields.featuredVideoAspectRatio
            ? { aspectRatio: `${client.fields.featuredVideoAspectRatio}` }
            : { height: `calc(100vh - 239px)` }),
        }}
      >
        {client.fields.featuredVideo && (
          <>
            <iframe
              className={styles.video__iframe__desktop}
              src={`https://player.vimeo.com/video/${client.fields.featuredVideo}?controls=1`}
              allow="autoplay"
              title="Current Media Company Video for desktop"
              rel="preconnect"
              allowFullScreen={true}
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              muted={true} // Muted autoplay
              playsInline={true} // Plays inline on iOS
            ></iframe>
            <iframe
              className={styles.video__iframe__mobile}
              src={`https://player.vimeo.com/video/${client.fields.featuredVideo}?controls=1&loop=1&byline=0&title=0&autopause=0?muted=1`}
              frameBorder="0"
              allow="autoplay"
              title="Current Media Company Video for mobile"
              allowFullScreen={true}
              rel="preconnect"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              aria-controls="1"
              muted={true} // Muted autoplay
              playsInline={true} // Plays inline on iOS
            ></iframe>
          </>
        )}
      </div>

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
              <h3 className={`${styles.service}`}>{service.fields.title}</h3>
              {index < client.fields.services.length - 1 && ", "}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
