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

export default function DescriptionBlocks(props) {
  const { title, descriptionOne, descriptionOneTitle, descriptionTwo, descriptionTwoTitle, descriptionThree, descriptionThreeTitle, descriptionFour, descriptionFourTitle, } = props;


  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.title} ${redHatMono.className}`}>
          <span>{ title }</span>
        </div>
        <div className={`${styles.descriptionBlocks} ${redHatText.className}`}>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionOneTitle }</span>
            <span className={styles.descriptionSpan}>{ descriptionOne }</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionTwoTitle }</span>
            <span className={styles.descriptionSpan}>{ descriptionTwo }</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionThreeTitle }</span>
            <span className={styles.descriptionSpan}>{ descriptionThree }</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionFourTitle }</span>
            <span className={styles.descriptionSpan}>{ descriptionFour }</span>
          </div>
        </div>
      </div>
    </>
  )
}
