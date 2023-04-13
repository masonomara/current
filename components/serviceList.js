// serviceList.js

import React from 'react'
import styles from "../styles/serviceList.module.css"
import ServiceCard from "./serviceCard.js"


export default function ServiceList({serviceProps}) {

  return (
    <>
      <div className={styles.container__two}>
        {
          serviceProps.map((service) => (
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
