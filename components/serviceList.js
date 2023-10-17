// serviceList.js

import React from "react";
import styles from "../styles/serviceList.module.css";
import ServiceCard from "./serviceCard.js";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export default function ServiceList({ serviceProps, max }) {
  const servicesToShow = max ? serviceProps.slice(0, max) : serviceProps;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <div className={styles.container}>
        {servicesToShow.map((service, index) => (
          <motion.div
            key={service.fields.id}
            variants={fadeIn("up", "spring", 0.2 + index * 0.1, 0.8)}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
