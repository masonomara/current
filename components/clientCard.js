import styles from '../styles/clientCard.module.css'
import React from 'react'
import Link from 'next/link'

export default function ClientCard({ client }) {

  console.log(client)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.photo} style={{backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`}} />

        <div className={styles.info__wrapper}>
          <div className={styles.title}>
            <span>{client.fields.title}</span>
          </div>
          <div className={styles.industry}>
            <span>{client.fields.industry}</span>
          </div>
          <div className={styles.service__container}>
            {
              client.fields.services.map((service) => (
                <React.Fragment key={service.fields.id}>
                  <Link href={`/service/${service.fields.slug}`} className={styles.service}>{service.fields.title}</Link>
                  {service < service.length - 1 && ", "}
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
