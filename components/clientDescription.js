import Link from "next/link";
import styles from "../styles/description.module.css";

import Image from "next/image";


export default function ClientDescription({ client }) {
  return (
    <>
      <div className={`${styles.wrapper} ${styles.wrapper__client}`}>
        <div className={`${styles.description__client}`}>
        • {client.fields.shortDescription}
        </div>
        <div className={styles.gallery__wrapper}>
          {client.fields.gallery.map((photo) => (
            <div
              key={photo.fields.title}
              alt="poster"
              className={styles.photo}
              width={photo.fields.file.details.image.height}
              height={photo.fields.file.details.image.height}
              src={"https:" + photo.fields.file.url}
              placeholder="blur"
              blurDataURL={"https:" + photo.fields.file.url}
              lazyLoad={true}
              style={{
                backgroundImage: `url('https:${photo.fields.file.url}')`,
              }}
            />

          ))}
        </div>
      </div>
    </>
  );
}
