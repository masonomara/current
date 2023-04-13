import Link from "next/link";
import styles from "../styles/description.module.css"

export default function Description(props) {
  const { title, description, link, linkhref, border, spacer } = props;


  return (
    <>
      <div className={`${styles.wrapper} ${ border && styles.border} ${ spacer && styles.spacer}`}>
        <div className={styles.title}>
          <span>{ title }</span>
        </div>
        <div className={styles.description}>
          <span>{ description }</span>
        </div>
        { link && (
          <Link className={styles.link} href={`${linkhref}`} target="_blank" passHref scroll={false}>
            <span>[{ link }]</span>
          </Link>
        )}
      </div>
    </>
  )
}
