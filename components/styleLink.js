// styleLink.js

import React from 'react'
import styles from "../styles/styleLink.module.css"
import Link from 'next/link'


export default function StyleLink({href, title}) {

  return (
    <>
        <div className={styles.link__wrapper}>
            <Link className={styles.link__title} href={`${href}`} target="_top">
            <span >
              
              [&nbsp;{title}&nbsp;]
            </span>
            </Link>
        </div>
    </>
  )
}