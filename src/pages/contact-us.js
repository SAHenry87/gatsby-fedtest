import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact us" />
    <section id="contact-page"> 

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>

                <div className="contact-section">
                    <div className="content-wrapper">
                        <h1>Contact us</h1>
                        <div className="form-container">
                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        
                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                <label for="email">Email address</label>
                                <input type="email" id="email" name="email" placeholder="e.g. name@email.com" /> 
                        
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="I deserve a luxury car because..."></textarea>
                        
                                <input type="submit" value="Submit" />

                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="contact" />
                              </form>
                        </div>
                    </div>
                </div>
            </section>
  </Layout>
)

export default ContactPage