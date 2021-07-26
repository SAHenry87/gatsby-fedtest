import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DesktopImgOneW from "../images/home-hero-1.webp"
import DesktopImgOne from "../images/home-hero-1.jpg"
import DesktopImgTwoW from "../images/home-hero-2.webp"
import DesktopImgTwo from "../images/home-hero-2.jpg"
import DesktopImgThreeW from "../images/home-hero-3.webp"
import DesktopImgThree from "../images/home-hero-3.jpg" 
import DesktopImgFourW from "../images/home-hero-4.webp"
import DesktopImgFour from "../images/home-hero-4.jpg"
import TabImgOneW from "../images/tab-hero-1.webp"
import TabImgOne from "../images/tab-hero-1.jpg"
import TabImgTwoW from "../images/tab-hero-2.webp"
import TabImgTwo from "../images/tab-hero-2.jpg"
import TabImgThreeW from "../images/tab-hero-3.webp"
import TabImgThree from "../images/tab-hero-3.jpg"
import TabImgFourW from "../images/tab-hero-4.webp"
import TabImgFour from "../images/tab-hero-4.jpg"
import MobImgOneW from "../images/mob-hero-1.webp"
import MobImgOne from "../images/mob-hero-1.jpg"
import MobImgTwoW from "../images/mob-hero-2.webp"
import MobImgTwo from "../images/mob-hero-2.jpg"
import MobImgThreeW from "../images/mob-hero-3.webp"
import MobImgThree from "../images/mob-hero-3.jpg"
import MobImgFourW from "../images/mob-hero-4.webp" 
import MobImgFour from "../images/mob-hero-4.jpg"

const IndexPage = () => (
  <Layout>
    <Seo title="Homepage" />
            <section id="home-hero">
              
                <div className="slider-wrapper sldr">
                    
                    <picture>
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgOneW} type="image/webp" />
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgOne} type="image/jpeg" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgOneW} type="image/webp" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgOne} type="image/jpeg" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgOneW} type="image/webp" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgOne} type="image/jpeg" />
                        <img src={DesktopImgOne} alt="Homepage hero one" />
                    </picture>
                    <picture>
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgTwoW} type="image/webp" />
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgTwo} type="image/jpeg" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgTwoW} type="image/webp" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgTwo} type="image/jpeg" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgTwoW} type="image/webp" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgTwo} type="image/jpeg" />
                        <img src={DesktopImgTwo} alt="Homepage hero two" />
                    </picture>
                    <picture>
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgThreeW} type="image/webp" />
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgThree} type="image/jpeg" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgThreeW} type="image/webp" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgThree} type="image/jpeg" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgThreeW} type="image/webp" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgThree} type="image/jpeg" />
                        <img src={DesktopImgThree} alt="Homepage hero three" />
                    </picture>
                    <picture>
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgFourW} type="image/webp" />
                        <source media="(min-width: 48.063em)" srcSet={DesktopImgFour} type="image/jpeg" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgFourW} type="image/webp" />
                        <source media="(min-width: 30.063em) and (max-width: 48em)" srcSet={TabImgFour} type="image/jpeg" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgFourW} type="image/webp" />
                        <source media="(max-width: 30.000em)" srcSet={MobImgFour} type="image/jpeg" />
                        <img src={DesktopImgFour} alt="Homepage hero four" />
                    </picture>
                </div>

                <div className="color-overlay"></div>

                <aside className="slide-away">
                    <div className="slide"><div className="text"><span>CB CARS</span></div></div>
                    <div className="slide"><div className="text"><span>SELLS</span></div></div>
                    <div className="slide"><div className="text"><span>LUXYRY</span></div></div>
                    <div className="slide"><div className="text"><span>VEHICLES</span></div></div>
                </aside>

                <div className="center-text">
                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                    <div className="text-box">
                        <div className="heading"><span>GET YOURS TODAY</span></div>
                    </div>
                </div>

                <div className="strapline">
                    <div className="strapline-wrapper">
                        <div className="strapline-center">
                            <h1>CB Cars Competition</h1>
                            <p>For our inaugural showroom opening, we're giving away a Mercedes-Maybach 6 Cabriolet to one lucky person. Contact us and tell us why you should be the one to win for a chance drive away from our showroom in style.</p>
                            <Link to="/contact-us" className="cta">Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>
  </Layout>
)



export default IndexPage
