import Link from "next/link"
import styles from "../styles/Footer.module.css"

import CurrentLogo from "../public/CURRENT.svg"

import { BsVimeo } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <CurrentLogo className={styles.logo} />
        <Link className={styles.link} href="mailto:email : info@currentmediacompany.com" target="_blank" passHref scroll={false}>
          <span>email : info@currentmediacompany.com</span>
        </Link>
        <div className={styles.socialLink__container}>
          <Link className={styles.socialLink__wrapper} href="https://vimeo.com/currentmedia?embedded=true&source=owner_name&owner=149610989" target="_blank" passHref scroll={false}>
            <BsVimeo />
          </Link>
          <Link className={styles.socialLink__wrapper} href="https://www.instagram.com/currentmediacompany/" target="_blank" passHref scroll={false}>
            <BsInstagram />
          </Link>
          <Link className={styles.socialLink__wrapper} href="https://www.facebook.com/currentmediacompanynj" target="_blank" passHref scroll={false}>
            <BsFacebook />
          </Link>
          <Link className={styles.socialLink__wrapper} href="https://www.linkedin.com/company/currentmediaco/" target="_blank" passHref scroll={false}>
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </>
  )
}
