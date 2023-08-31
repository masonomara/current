import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

import { Red_Hat_Display, Red_Hat_Text, Roboto } from 'next/font/google'

const redHatText = Red_Hat_Display({
  weight: ['500'],
  style: ['normal'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
  <div className={redHatText.className}>
    <Component {...pageProps}  />
    <Analytics />
  </div>
  )
}

export default MyApp
