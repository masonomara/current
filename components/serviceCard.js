import styles from '../styles/serviceCard.module.css'
import React from 'react'
import Link from 'next/link'

export default function ServiceCard({ service }) {

  console.log(service)

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.photo} style={{backgroundImage: `url('https:${service.fields.featuredImage.fields.file.url}')`}} />

        <div className={styles.info__wrapper}>
          <div className={styles.title}>
            <span>{service.fields.title}</span>
          </div>
          <div className={styles.industry}>
            <span>{service.fields.excerpt}</span>
          </div>
        </div>
      </div>
    </>
  )
}
