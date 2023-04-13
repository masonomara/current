import Link from "next/link"
import styles from "../styles/Navbar.module.css"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const navigation = [
  { id: '1', title: 'Work', href: '/work', target: '_top' },
  { id: '2', title: 'Services', href: '/services', target: '_top' },
  { id: '3', title: 'About', href: '/about', target: '_top' },
  { id: '4', title: 'Contact', href: '/contact', target: '_top' },
]


export default function Navbar() {

  const [startScroll, setStartScroll] = useState(false);
  const router = useRouter()
  const { pathname } = router;  

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window?.innerHeight;
      const percentScroll = window.scrollY / windowHeight;
      if (percentScroll > 0) {
        setStartScroll(true);
      } else {
        setStartScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.wrapper} ${pathname === "/" | pathname === "/work" | pathname === "/services" | pathname === "/about" && startScroll === false ? styles.wrapper__pre : ""}`}>
        <Link className={`${styles.logo} ${pathname === "/" | pathname === "/work" | pathname === "/services" | pathname === "/about" && startScroll === false ? styles.logo__pre : ""}`} href="/" target="_top" passHref scroll={false}>
          <span>CURRENT</span>
        </Link>
        <div className={styles.menu__wrapper}>
          {
            navigation.map((item) => (
              <Link key={item.id} className={`${styles.menu__link} ${pathname === "/" | pathname === "/work" | pathname === "/services" | pathname === "/about" && startScroll === false ? styles.menu__link__pre : ""}`} href={item.href} target={item.target} passHref scroll={false}>
                <span className={styles.link__title}>[{item.id}]</span>
                <span className={styles.link__space}>&nbsp;</span>
                <span className={styles.link__title}>{item.title}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}
