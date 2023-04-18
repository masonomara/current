// clientList.js

import React from 'react'
import styles from "../styles/clientList.module.css"
import ClientCard from "../components/clientCard.js"


export default function ClientList({clientProps, activeClientValues}) {

  return (
    <>
      <div className={styles.container}>
        {
          clientProps.map((client) => (
            <ClientCard
              key={client.fields.id}
              client={client}
              activeClientValues={activeClientValues}
            />
          ))
        }
      </div>
    </>
  )
}
