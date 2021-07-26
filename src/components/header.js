import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hamburger from "./menu.js"

const Header = ({ siteTitle }) => (
  <header>
    <div className="inner-header">
      <div className="logo">
        <Link to="/">
          <StaticImage
            src="../images/cb-cars-logo.svg"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF", "SVG"]}
            alt="CB CARS"
          />
        </Link>
      </div>
      
  <section className="mobile-nav">
    <Hamburger></Hamburger>
    <div className="overlay" id="nav">
        <div className="overlay-content">
            <nav id="nav-items">                        
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
            </nav>
        </div>
    </div>
  </section>
      
      
    </div>
  </header>
)



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
