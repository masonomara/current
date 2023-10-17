import Link from "next/link";
import styles from "../styles/description.module.css";
import { motion } from "framer-motion";
import { staggerContainer, grow, fadeIn } from "../utils/motion";
import { TypingText } from "./typingText";

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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <div className={`${styles.wrapper}`}>
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
          <motion.div className={`${styles.description} ${styles.description__first}`} variants={fadeIn('up', 'spring', 0.2, 0.8)}>
            <span>{description}</span>
          </motion.div>
        ) : (
          <motion.div className={`${styles.description}`} variants={fadeIn('up', 'spring', 0.2, 0.8)}>
            <span>{description}</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
