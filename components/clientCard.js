import styles from '../styles/clientCard.module.css'
import React, { useState } from 'react'
import Link from 'next/link'
import { Red_Hat_Mono } from 'next/font/google'

const redHatMono = Red_Hat_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function ClientCard({ client, fullWidth, nullClientValues }) {

  const [nullValues, setNullValues] = useState(nullClientValues ?? []);

  console.log("clients", client.fields.services.map(service => service.fields.title))

  return (
    <>
      <div
        className={`${styles.wrapper} ${fullWidth && styles.wrapper__full} ${client.fields.services.some(service => nullValues.includes(service.fields.title)) && styles.wrapper__null}`}
      >
        <Link
          className={styles.photo} style={{backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`}}
          target="_top"
          href={`${client.fields.slug}`}
        />
        <div className={styles.info__wrapper}>
          <Link
            className={`${styles.title} ${redHatMono.className}`}
            target="_top"
            href={`${client.fields.slug}`}
          >
            <span>CLIENT&nbsp;: {client.fields.title}</span>
          </Link>
          <div className={`${styles.description} ${redHatMono.className}`}>
            <span>INDUSTRY : <span className={styles.industry}>{client.fields.industry}</span></span>
            &nbsp;&nbsp;&nbsp;&nbsp;SERVICES&nbsp;:&nbsp;
            {
  client.fields.services.map((service, index) => (
    <Link key={service.fields.id} href={`/services/${service.fields.slug}`} target="_top">
      <span className={`${styles.service} ${redHatMono.className}`}>{service.fields.title}</span>
      {index < client.fields.services.length - 1 && ", "}
    </Link>
  ))
}
          </div>

        </div>
      </div>
    </>
  )
}
