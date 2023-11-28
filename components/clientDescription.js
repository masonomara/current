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
        {client.fields.video2 && (
          <div
            className={`${styles.wrapper__client} ${styles.video__wrapper}`}
            style={{
              backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
              ...(client.fields.featuredVideoAspectRatio
                ? { aspectRatio: `${client.fields.video2AspectRatio}` }
                : { height: `calc(100vh - 239px)` }),
            }}
          >
            <>
              <iframe
                className={styles.video__iframe__desktop}
                src={`https://player.vimeo.com/video/${client.fields.video2}?controls=1`}
                allow="autoplay"
                title="Current Media Company Video for desktop"
                rel="preconnect"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
              <iframe
                className={styles.video__iframe__mobile}
                src={`https://player.vimeo.com/video/${client.fields.video2}?controls=1&loop=1&byline=0&title=0&autopause=0?muted=1`}
                frameBorder="0"
                allow="autoplay"
                title="Current Media Company Video for mobile"
                allowFullScreen={true}
                rel="preconnect"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                aria-controls="1"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
            </>
          </div>
        )}
        {client.fields.video3 && (
          <div
            className={`${styles.wrapper__client} ${styles.video__wrapper}`}
            style={{
              backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
              ...(client.fields.featuredVideoAspectRatio
                ? { aspectRatio: `${client.fields.video3AspectRatio}` }
                : { height: `calc(100vh - 239px)` }),
            }}
          >
            <>
              <iframe
                className={styles.video__iframe__desktop}
                src={`https://player.vimeo.com/video/${client.fields.video3}?controls=1`}
                allow="autoplay"
                title="Current Media Company Video for desktop"
                rel="preconnect"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
              <iframe
                className={styles.video__iframe__mobile}
                src={`https://player.vimeo.com/video/${client.fields.video3}?controls=1&loop=1&byline=0&title=0&autopause=0?muted=1`}
                frameBorder="0"
                allow="autoplay"
                title="Current Media Company Video for mobile"
                allowFullScreen={true}
                rel="preconnect"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                aria-controls="1"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
            </>
          </div>
        )}
        {client.fields.video4 && (
          <div
            className={`${styles.wrapper__client} ${styles.video__wrapper}`}
            style={{
              backgroundImage: `url('https:${client.fields.featuredImage.fields.file.url}')`,
              ...(client.fields.featuredVideoAspectRatio
                ? { aspectRatio: `${client.fields.video4AspectRatio}` }
                : { height: `calc(100vh - 239px)` }),
            }}
          >
            <>
              <iframe
                className={styles.video__iframe__desktop}
                src={`https://player.vimeo.com/video/${client.fields.video4}?controls=1`}
                allow="autoplay"
                title="Current Media Company Video for desktop"
                rel="preconnect"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
              <iframe
                className={styles.video__iframe__mobile}
                src={`https://player.vimeo.com/video/${client.fields.video4}?controls=1&loop=1&byline=0&title=0&autopause=0?muted=1`}
                frameBorder="0"
                allow="autoplay"
                title="Current Media Company Video for mobile"
                allowFullScreen={true}
                rel="preconnect"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                aria-controls="1"
                muted={true} // Muted autoplay
                playsInline={true} // Plays inline on iOS
              ></iframe>
            </>
          </div>
        )}
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
