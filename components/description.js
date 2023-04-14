import Link from "next/link";
import styles from "../styles/description.module.css"

import { Red_Hat_Mono, Red_Hat_Text } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const redHatDisplay = Red_Hat_Text({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Description(props) {
  const { title, description, link, linkhref, border, spacer } = props;


  return (
    <>
      <div className={`${styles.wrapper} ${ border && styles.border} ${ spacer && styles.spacer}`}>

        <div className={`${styles.description} ${redHatDisplay.className}`}>
          <span>{ description }</span>
        </div>
        <div className={`${styles.title} ${redHatMono.className}`}>
          <span>{ title }</span>
        </div>
        { link && (
          <Link className={styles.link} href={`${linkhref}`} target="_blank" passHref scroll={false}>
            <span>{ link }</span>
          </Link>
        )}
      </div>
    </>
  )
}
