import Link from "next/link"
import styles from "../styles/Footer.module.css"

import CurrentLogo from "../public/CURRENT.svg"
import WavesLogo from "../public/waves.svg"

import { BsVimeo } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import { Red_Hat_Display, Red_Hat_Mono } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})
const redHatDisplay = Red_Hat_Display({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header__wrapper}>
          <div className={styles.wavesLogo__wrapper}>
            <WavesLogo className={styles.wavesLogo} />
          </div>
          <span className={`${styles.headerText} ${redHatDisplay.className}`}>CURRENT MEDIA CO.</span>
        </div>

      <div className={styles.bottom__wrapper}>
        <div className={styles.socials__container}>
          <Link className={` ${redHatMono.className} ${styles.link}`} href="https://vimeo.com/currentmedia?embedded=true&source=owner_name&owner=149610989" target="_blank" passHref scroll={false}>
            <span>VIMEO</span>
          </Link>
          <Link className={` ${redHatMono.className} ${styles.link}`} href="https://www.instagram.com/currentmediacompany/" target="_blank" passHref scroll={false}>
            <span>INSTAGRAM</span>
          </Link>
          <Link className={` ${redHatMono.className} ${styles.link}`} href="https://www.facebook.com/currentmediacompanynj" target="_blank" passHref scroll={false}>
            <span>FACEBOOK</span>
          </Link>
          <Link className={` ${redHatMono.className} ${styles.link}`} href="https://www.linkedin.com/company/currentmediaco/" target="_blank" passHref scroll={false}>
            <span>LINKEDIN</span>
          </Link>
        </div>
        <div className={styles.info__container}>
          <Link className={` ${redHatMono.className} ${styles.link}`} href="mailto:email : info@currentmediacompany.com" target="_blank" passHref scroll={false}>
            <span>info@currentmediacompany.com</span>
          </Link>
          <div className={` ${redHatMono.className} ${styles.not__link}`}>
            <span>1003 Bond Street, Suite 8, Asbury Park, NJ 07712 </span>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
