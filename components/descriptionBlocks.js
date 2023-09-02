import Link from "next/link";
import styles from "../styles/description.module.css"


export default function DescriptionBlocks(props) {
  const { title, descriptionOne, descriptionOneTitle, descriptionTwo, descriptionTwoTitle, descriptionThree, descriptionThreeTitle, descriptionFour, descriptionFourTitle, } = props;


  return (
    <>
      <div className={`${styles.wrapper} ${styles.wrapper__blocks}`}>
        <div className={`${styles.title}`}>
          <span>{ title }</span>
        </div>
        <div className={`${styles.descriptionBlocks}`}>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionOneTitle }</span>
            <span className={styles.descriptionSpan}>RED KOMODO-X 6K<br /><div className={styles.spacer} />Canon C70<br /><div className={styles.spacer} />Canon R5<br /><div className={styles.spacer} />Blackmagic Pocket 4K<br /><div className={styles.spacer} />Mavic 2 Pro Zoom Drone</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionTwoTitle }</span>
            <span className={styles.descriptionSpan}>NextJS 13 and React<br /><div className={styles.spacer} />Shopify CLI<br /><div className={styles.spacer} />MongoDB and MySQL<br /><div className={styles.spacer} />Express<br /><div className={styles.spacer} />Node.js</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionThreeTitle }</span>
            <span className={styles.descriptionSpan}>Aputure Amaran 200x (Light Dome II)<br /><div className={styles.spacer} />Aputure Amaran 100d<br /><div className={styles.spacer} />Aputure Amaran P60c</span>
          </div>
          <div className={styles.descriptionBlock}>
            <span className={styles.titleSpan}>{ descriptionFourTitle }</span>
            <span className={styles.descriptionSpan}>Rode Wireless GO Lavs x2<br /><div className={styles.spacer} />Rode VideoMic Pro+</span>
          </div>
        </div>
      </div>
    </>
  )
}
