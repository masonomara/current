// styleLink.js

import React from "react";
import styles from "../styles/styleLink.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export default function StyleLink({ href, title, level, mobileTitle, client }) {
  return (
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0 }}
  >
      {level === "1" ? (
        <motion.div className={styles.link__wrapper__yellow} variants={fadeIn('up', 'spring', 0.3, .8)}>
          <Link href={href} target="_top">
            <span className="desktop">{title}</span>
            <span className="mobile">{mobileTitle}</span>
          </Link>
        </motion.div>
      ) : client === true ? (
        <motion.div className={`${styles.link__wrapper} ${styles.wrapper__client}`} variants={fadeIn('up', 'spring', 0.3, .8)}>
          <Link href={href} target="_top">
            <span className="desktop"><span className="boldie">[</span>&nbsp;<span className="underline">{title}</span>&nbsp;<span className="boldie">]</span></span>
            <span className="mobile"><span className="boldie">[</span>&nbsp;<span className="underline">{mobileTitle}</span>&nbsp;<span className="boldie">]</span></span>
          </Link>
        </motion.div>
      ) : (
        <motion.div className={styles.link__wrapper} variants={fadeIn('up', 'spring', 0.3, .8)}>
          <Link href={href} target="_top">
            <span className="desktop"><span className="boldie">[</span>&nbsp;<span className="underline">{title}</span>&nbsp;<span className="boldie">]</span></span>
            <span className="mobile"><span className="boldie">[</span>&nbsp;<span className="underline">{mobileTitle}</span>&nbsp;<span className="boldie">]</span></span>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}
