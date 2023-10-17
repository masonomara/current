import styles from "../styles/description.module.css";
import ClientCard from "./clientCard";

export default function serviceDescription({ clientProps, service }) {
  console.log("clientProps", clientProps);

  return (
    <>
      <div className={`${styles.wrapper} ${styles.wrapper__client}`}>
        <div className={`${styles.description__client}`}>
          • {service.fields.description}
        </div>

        <div className={styles.client__list}>
          {clientProps.map((client) => (
            <ClientCard
              key={client.fields.id}
              client={client}
              activeClientValues={`${service.fields.title}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
