import React from "react";
import Link from "next/link";
import styles from "../styles/clientCard.module.css";

export default function ClientCard({ client, fullWidth, activeClientValues }) {
  const hasActiveServices = client.fields.services.some((service) =>
    activeClientValues.includes(service.fields.title)
  );

  return (
    <Link
      href={`/clients/${client.fields.slug}`}
      className={`${styles.wrapper} ${fullWidth && styles.wrapper__full} ${
        hasActiveServices ? "" : styles.wrapper__null
      }`}
    >
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
        }}
      >
        <div className={styles.overlay} />
      </div>
      <div className={styles.info__wrapper}>
        <div className={styles.title}>
          <span>CLIENT&nbsp;&nbsp;&nbsp;:&nbsp;{client.fields.title}</span>
        </div>
        <div className={`${styles.description}`}>
          <span>INDUSTRY&nbsp;:&nbsp;</span>
          <span className={styles.industry}>{client.fields.industry}</span>
        </div>
        <div className={`${styles.description}`}>
          <div>
            <span>SERVICES&nbsp;:&nbsp;</span>
          </div>
          <div>
            {client.fields.services.map((service, index) => (
              <div
                key={service.fields.id}
                href={`/services/${service.fields.slug}`}
              >
                <span className={`${styles.service}`}>
                  {service.fields.title}
                </span>
                {index < client.fields.services.length - 1 && ", "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
