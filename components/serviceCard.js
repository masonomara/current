import styles from '../styles/serviceCard.module.css'
import React from 'react'
import { Red_Hat_Mono } from 'next/font/google'


const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function ServiceCard({ service }) {

  console.log(service)

  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.photo} style={{backgroundImage: `url('https:${service.fields.featuredImage.fields.file.url}')`}} />
        <div className={styles.info__wrapper}>
          <div className={`${styles.title} ${redHatMono.className}`}>
            <span>SERVICE : {service.fields.title}</span>
          </div>
        </div>
      </div>
    </>
  )
}
