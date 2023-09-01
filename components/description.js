import Link from "next/link";
import styles from "../styles/description.module.css";

export default function Description(props) {
  const {
    title,
    description,
    first,
    description2,
    link,
    linkhref,
    border,
    spacer,
  } = props;

  return (
    <div className={`${styles.wrapper}`}>
      {first === true ? (
        ""
      ) : (
        <div className={`${styles.title}`}>
          <span>{title}</span>
        </div>
      )}
      {first === true ? (
        <div className={`${styles.description} ${styles.description__first}`}>
          <span>{description}</span>
        </div>
      ) : (
        <div className={`${styles.description}`}>
          <span>{description}</span>
        </div>
      )}
    </div>
  );
}
