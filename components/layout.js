import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Link from "next/link";


export default function Layout({ children }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("popupShown");

    if (!hasPopupBeenShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("popupShown", "true");
      }, 8000); // 8 seconds

      return () => {
        clearTimeout(timer);
      };
    } else {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="layout">
      <Navbar />
      <div>{children}</div>
      <Footer />
      {/*}
      {showPopup && (
        <Link className="footer__popup" href="mailto:info@currentmediacompany.com" target="_blank">
          <div className="footer__popup__button">[ Email : info@currentmediacompany.com ]</div>
        </Link>
      )}
      */}
    </div>
  );
}
