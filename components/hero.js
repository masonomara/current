import styles from "../styles/Hero.module.css";
import DownArrow from "../public/downArrow.svg";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

export default function Hero(props) {
  const { title, subtitle, link, linkhref } = props;

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
      <div className={styles.wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <div className={styles.overlay} />
        <div className={styles.title__wrapper}>
          <div className={`${styles.title}`}>
            <span>{title}</span>
          </div>
          {title && (
            <div className={`${styles.subtitle}`}>
              <span>{subtitle}</span>
            </div>
          )}
        </div>
        {link && (
          <Link
            className={`${styles.link}`}
            href={`${linkhref}`}
            target="_blank"
            scroll={false}
          >
            <span className={styles.link__text}>{link}</span>
          </Link>
        )}
        <DownArrow
          className={`${styles.arrow} ${
            startScroll === false && styles.arrow__pre
          }`}
        />
        <div className={styles.video__wrapper}>
          <iframe
            className={styles.video__iframe__desktop__header}
            src="https://player.vimeo.com/video/859612802?background=1&autoplay=1&loop=1&byline=0&title=0&autopause=0?muted=1"
            frameBorder="0"
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
            className={styles.video__iframe__mobile__header}
            src="https://player.vimeo.com/video/859614231?background=1&autoplay=1&loop=1&byline=0&title=0&autopause=0?muted=1"
            frameBorder="0"
            allow="autoplay"
            title="Current Media Company Video for mobile"
            allowFullScreen={true}
            rel="preconnect"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            muted={true} // Muted autoplay
            playsInline={true} // Plays inline on iOS
          ></iframe>
        </div>
        </motion.div>
      </div>
    </>
  );
}
