// clientList.js

import React from "react";
import styles from "../styles/clientList.module.css";
import ClientCard from "../components/clientCard.js";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export default function ClientList({ clientProps, activeClientValues, max }) {
  // Apply the maximum limit if max prop is passed and is a valid number
  const clientsToShow = max ? clientProps.slice(0, max) : clientProps;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <div className={styles.container}>
        {clientsToShow.map((client, index) => (
          <motion.div key={client.fields.id} variants={fadeIn('up', 'spring', 0.2 + index * 0.1, 0.8)}>
            <ClientCard
              client={client}
              activeClientValues={activeClientValues}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
