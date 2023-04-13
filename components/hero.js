import styles from "../styles/Hero.module.css"
import DownArrow from "../public/downArrow.svg"
import Link from "next/link";

export default function Hero(props) {
  const { title, subtitle, link, linkhref } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title__wrapper}>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
          { title && (
            <div className={styles.subtitle}>
              <span>{subtitle}</span>
            </div>
          )}
        </div>
        { link && (
          <Link className={styles.link} href={`${linkhref}`} target="_blank" passHref scroll={false}>
            <span>[{link}]</span>
          </Link>
        )}
        <DownArrow className={styles.arrow}/>
      </div>
    </>
  )
}
