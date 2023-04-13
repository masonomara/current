// clientList.js

import React from 'react'
import styles from "../styles/clientList.module.css"
import ClientCard from "../components/clientCard.js"


export default function ClientList({clientProps}) {

  return (
    <>
      <div className={styles.container__two}>
        {
          clientProps.map((client) => (
            <ClientCard
              key={client.fields.id}
              client={client}
            />
          ))
        }
      </div>
    </>
  )
}
