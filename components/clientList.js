// clientList.js

import React from 'react'
import styles from "../styles/clientList.module.css"
import ClientCard from "../components/clientCard.js"


export default function ClientList({ clientProps, activeClientValues, max }) {
  // Apply the maximum limit if max prop is passed and is a valid number
  const clientsToShow = max ? clientProps.slice(0, max) : clientProps;

  return (
    <>
      <div className={styles.container}>
        {clientsToShow.map((client) => (
          <ClientCard
            key={client.fields.id}
            client={client}
            activeClientValues={activeClientValues}
          />
        ))}
      </div>
    </>
  );
}
