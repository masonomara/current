import Link from "next/link";
import styles from "../styles/description.module.css"

import { Red_Hat_Mono, Red_Hat_Text } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const redHatText = Red_Hat_Text({
  weight: ['300', "600"],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Description(props) {
  const { title, description, link, linkhref, border, spacer } = props;


  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.title} ${redHatMono.className}`}>
          <span>{ title }</span>
        </div>
        <div className={`${styles.description} ${redHatText.className}`}>
          <span>{ description }</span>
        </div>
      </div>
    </>
  )
}
