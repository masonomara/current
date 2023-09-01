import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

import localFont from "@next/font/local";

const simplonMono = localFont({
  src: [
    {
      path: "../public/SimplonMono/SimplonMono-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/SimplonMono/SimplonMono-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/SimplonMono/SimplonMono-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/SimplonMono/SimplonMono-Light.otf",
      weight: "300",
    },
  ],
});

function MyApp({ Component, pageProps }) {
  return (
  <div className={`main ${simplonMono.className}`}>
    <Component {...pageProps}  />
    <Analytics />
  </div>
  )
}

export default MyApp
