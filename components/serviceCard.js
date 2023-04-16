import styles from '../styles/serviceCard.module.css'
import React from 'react'
import { Red_Hat_Mono } from 'next/font/google'
import Link from 'next/link'

const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function ServiceCard({ service }) {

  console.log(service)

  return (
    <>
      <Link className={styles.wrapper} target="_top" href={"services/" + `${service.fields.slug}`}>
      <div className={styles.photo} style={{backgroundImage: `url('https:${service.fields.featuredImage.fields.file.url}')`}} />
        <div className={styles.info__wrapper}>
          <div className={`${styles.title} ${redHatMono.className}`}>
            <span>SERVICE : {service.fields.title}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
