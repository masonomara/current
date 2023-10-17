import Link from "next/link";
import styles from "../styles/description.module.css";
import { motion } from "framer-motion";
import { staggerContainer, grow } from "../utils/motion";
import { TypingText } from "./typingText";

export default function DescriptionLast(props) {
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <div className={`${styles.wrapper} ${styles.wrapper__last}`}>
        {first === true ? (
          ""
        ) : (
          <>
            <div className={`${styles.title}`}>
            <TypingText title={`${title}`} />
            </div>
            <motion.div className={styles.divider} variants={grow} />
          </>
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
    </motion.div>
  );
}
