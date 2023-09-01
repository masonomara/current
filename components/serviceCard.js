import React from "react";
import Link from "next/link";
import styles from "../styles/serviceCard.module.css";

export default function ServiceCard({ service }) {
  return (
    <Link className={styles.wrapper} href={`/services/${service.fields.slug}`}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url('https:${service.fields.featuredImage.fields.file.url}')`,
        }}
      >
        <div className={styles.overlay} />
      </div>
      <div className={styles.info__wrapper}>
        <div className={styles.title}>
          <span>SERVICE&nbsp;: {service.fields.title}</span>
        </div>
      </div>
    </Link>
  );
}
