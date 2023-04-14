import styles from '../styles/clientCard.module.css'
import React from 'react'
import Link from 'next/link'
import { Red_Hat_Mono } from 'next/font/google'


const redHatMono = Red_Hat_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function ClientCard({ client, fullWidth }) {

  console.log(client)

  return (
    <>
      <div className={`${styles.wrapper} ${ fullWidth && styles.wrapper__full}`}>
        <div className={styles.photo} style={{backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`}} />
        <div className={styles.info__wrapper}>
          <div className={`${styles.title} ${redHatMono.className}`}>
            <span>CLIENT&nbsp;: {client.fields.title}</span>
          </div>
          <div className={`${styles.industry} ${redHatMono.className}`}>
            <span>INDUSTRY : {client.fields.industry}</span>
          </div>
          <div className={`${styles.service__container} ${redHatMono.className}`}>
            SERVICES&nbsp;:&nbsp;
            {
              client.fields.services.map((service) => (
                <React.Fragment key={service.fields.id}>
                  <Link href={`/service/${service.fields.slug}`} className={`${styles.service} ${redHatMono.className}`}>{service.fields.title}</Link>
                  {service < service.length - 1 && "  "}
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
