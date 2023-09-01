// serviceList.js

import React from 'react'
import styles from "../styles/serviceList.module.css"
import ServiceCard from "./serviceCard.js"


export default function ServiceList({serviceProps, max}) {

    const servicesToShow = max ? serviceProps.slice(0, max) : serviceProps;

  return (
    <>
      <div className={styles.container}>
        {
          servicesToShow.map((service) => (
            <ServiceCard
              key={service.fields.id}
              service={service}
            />
          ))
        }
      </div>
    </>
  )
}
