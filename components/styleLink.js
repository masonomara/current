// styleLink.js

import React from "react";
import styles from "../styles/styleLink.module.css";
import Link from "next/link";

export default function StyleLink({ href, title, level, mobileTitle, client }) {
  return (
    <>
      {level === "1" ? (
        <div className={styles.link__wrapper__yellow}>
          <Link href={href} target="_top">
            <span className="desktop">{title}</span>
            <span className="mobile">{mobileTitle}</span>
          </Link>
        </div>
      ) : client === true ? (
        <div className={`${styles.link__wrapper} ${styles.wrapper__client}`}>
          <Link href={href} target="_top">
            <span className="desktop"><span className="boldie">[</span>&nbsp;<span className="underline">{title}</span>&nbsp;<span className="boldie">]</span></span>
            <span className="mobile"><span className="boldie">[</span>&nbsp;<span className="underline">{mobileTitle}</span>&nbsp;<span className="boldie">]</span></span>
          </Link>
        </div>
      ) : (
        <div className={styles.link__wrapper}>
          <Link href={href} target="_top">
            <span className="desktop"><span className="boldie">[</span>&nbsp;<span className="underline">{title}</span>&nbsp;<span className="boldie">]</span></span>
            <span className="mobile"><span className="boldie">[</span>&nbsp;<span className="underline">{mobileTitle}</span>&nbsp;<span className="boldie">]</span></span>
          </Link>
        </div>
      )}
    </>
  );
}
