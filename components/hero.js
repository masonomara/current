import styles from "../styles/Hero.module.css"
import DownArrow from "../public/downArrow.svg"
import Link from "next/link";

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
            <span>{link}</span>
          </Link>
        )}
        <DownArrow className={styles.arrow}/>
      </div>
    </>
  )
}
