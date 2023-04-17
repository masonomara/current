import Navbar from "./navbar";
import Footer from "./footer";


export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="main">
        { children }
      </div>
      <Footer />
    </div>
  )
}
