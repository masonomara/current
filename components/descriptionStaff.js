import styles from "../styles/description.module.css"

export default function DescriptionStaff(props) {
  const { title, description } = props;


  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.title}`}>
          <span>{ title }</span>
        </div>
        <div className={`${styles.staff__container}`}>
          <div className={styles.staff__wrapper}>
            <div className={styles.photo} />
            <div className={styles.staffInfo__wrapper}>
              <span className={styles.name}>Ty Decker</span>
              <span className={styles.title}>Creative Director</span>
              <span className={styles.description}>Bio Filler</span>
            </div>
          </div>
          <div className={styles.staff__wrapper}>
            <div className={styles.photo} />
            <div className={styles.staffInfo__wrapper}>
              <span className={styles.name}>Ty Decker</span>
              <span className={styles.title}>Creative Director</span>
              <span className={styles.description}>Bio Filler</span>
            </div>
          </div>
          <div className={styles.staff__wrapper}>
            <div className={styles.photo} />
            <div className={styles.staffInfo__wrapper}>
              <span className={styles.name}>Mason O’Mara</span>
              <span className={styles.title}>Freelance Technical Developer</span>
              <span className={styles.description}>A developer specializing in creative front-end work to help business build up their digital brand. Focuses on projects with Next.js and Shopify.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
