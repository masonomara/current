import styles from "../styles/Hero.module.css"
import DownArrow from "../public/downArrow.svg"
import Link from "next/link";
import { useState, useEffect } from "react";

import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google'

import { Red_Hat_Mono } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
})

const redHatText = Red_Hat_Text({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})


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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.overlay} />
        <div className={styles.title__wrapper}>
          <div className={`${styles.title} ${redHatText.className}`}>
            <span>{title}</span>
          </div>
          { title && (
            <div className={`${styles.subtitle} ${redHatText.className}`}>
              <span>{subtitle}</span>
            </div>
          )}
        </div>
        { link && (
          <Link className={`${styles.link} ${redHatMono.className}`} href={`${linkhref}`} target="_blank" passHref scroll={false}>
            <span className={styles.link__text}>{link}</span>
          </Link>
        )}
        <DownArrow className={`${styles.arrow} ${startScroll === false && styles.arrow__pre}`} />
      </div>
    </>
  )
}
