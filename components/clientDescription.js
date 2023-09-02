import styles from "../styles/description.module.css";
import StyleLink from "./styleLink";

export default function ClientDescription({ client }) {

  const websiteText = client.fields.website.substring("https://www.".length);

  return (
    <>
      <div className={`${styles.wrapper} ${styles.wrapper__client}`}>
        <div className={`${styles.description__client}`}>
          • {client.fields.shortDescription}
        </div>
        <StyleLink
          href={`${client.fields.website}`}
          title={`WEBSITE : ${websiteText}`}
          mobileTitle={websiteText}
          client={true}
          newTab={true}
        />
          
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
