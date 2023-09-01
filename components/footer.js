import Link from "next/link";
import styles from "../styles/Footer.module.css";
import WavesLogo from "../public/waves.svg";

export default function Footer() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header__wrapper}>
          <div className={styles.wavesLogo__wrapper}>
            <WavesLogo className={styles.wavesLogo} />
          </div>
          <span className={`${styles.headerText}`}>CURRENT MEDIA CO.</span>
        </div>

        <div className={styles.bottom__wrapper}>
          <div className={styles.info__container}>
            <div className={`${styles.link}`}>
              <span>email&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span>
              <Link
                href="mailto:email : info@currentmediacompany.com"
                target="_blank"
                passHref
                scroll={false}
              >
                info@currentmediacompany.com
              </Link>
            </div>
            <div
              className={`${styles.link}`}
              href="https://www.google.com/maps/dir/40.2099211,-74.0243301/Current+Media+Company,+1301+Corlies+Ave,+Asbury+Park,+NJ+07712/@40.2099272,-74.0268966,17z/data=!3m1!4b1!4m18!1m7!3m6!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2sCurrent+Media+Company!8m2!3d40.2100187!4d-74.0243431!16s%2Fg%2F11p09n7wjt!4m9!1m1!4e1!1m5!1m1!1s0x2aaba72f78ae592f:0x471c3c6409d7ff16!2m2!1d-74.0243431!2d40.2100187!3e2?entry=ttu"
              target="blank"
              passHref
              scroll={false}
            >
              <span>location&nbsp;:&nbsp;</span>
              <Link
                href="mailto:email : info@currentmediacompany.com"
                target="_blank"
                passHref
                scroll={false}
              >
                1301 Corlies Ave, Suite 2D, Neptune, NJ 07712{" "}
              </Link>
            </div>
          </div>
          <div className={styles.bottomInfo__wrapper}>
            <div className={styles.socials__container}>
              <Link
                className={`${styles.link} ${styles.link__bare}`}
                href="https://www.instagram.com/currentmediacompany/"
                target="_blank"
                passHref
                scroll={false}
              >
                <span>INSTAGRAM</span>
              </Link>
              <Link
                className={`${styles.link} ${styles.link__bare}`}
                href="https://www.facebook.com/currentmediacompanynj"
                target="_blank"
                passHref
                scroll={false}
              >
                <span>FACEBOOK</span>
              </Link>
              <Link
                className={`${styles.link} ${styles.link__bare}`}
                href="https://www.linkedin.com/company/currentmediaco/"
                target="_blank"
                passHref
                scroll={false}
              >
                <span>LINKEDIN</span>
              </Link>
              <Link
                className={`${styles.link} ${styles.link__bare}`}
                href="https://vimeo.com/currentmedia?embedded=true&source=owner_name&owner=149610989"
                target="_blank"
                passHref
                scroll={false}
              >
                <span>VIMEO</span>
              </Link>
            </div>
            <div className={`${styles.bonus__container}`}>
              <div>© Current Media Company 2023</div>
              <div>Share with friends</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
