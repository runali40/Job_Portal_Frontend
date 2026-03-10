import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import { ContactApi } from '../../Api/ContactApi'

const Contact = () => {
  const [name, settName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const ContactData = async () => {
    const data =  await ContactApi(name, email, subject, message);
    console.log("data", data)

  }

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="section">
        <div className="contact-form">
          <div className="container">
            <div className="row contact-form-area">
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="contact-block text-start">
                  <h2>Contact Form</h2>
                  <div id="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" value={name} onChange={(e) => settName(e.target.value)} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" placeholder="Email" id="email" className="form-control" name="name" required data-error="Please enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea className="form-control" id="message" placeholder="Your Message" rows="5" data-error="Write your message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="submit-button">
                          <button className="btn btn-common text-start" id="submit" type="submit" onClick={ContactData}>Send Message</button>
                          <div id="msgSubmit" className="h3 text-center hidden"></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="contact-right-area wow fadeIn text-start">
                  <h2>Contact Address</h2>
                  <div className="contact-info">
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-map-marker"></i>
                      </div>
                      <p>113, 2nd floor, Punjani Estate <br /> Khopat Pokhran Road No. 1, Thane-400601</p>
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-envelope"></i>
                      </div>
                      <p><NavLink to="mailto:hello@tom.com">Mail Us: sales@devitinfrasoft.com</NavLink></p>
                      {/* <p><NavLink to="mailto:tomsaulnier@gmail.com">support@mail.com</NavLink></p> */}
                    </div>
                    <div className="single-contact">
                      <div className="contact-icon">
                        <i className="lni-phone-handset"></i>
                      </div>
                      <p><NavLink >Mob No: +91 8691911318</NavLink></p>
                      <p><NavLink >Mob No: +91 9321148952</NavLink></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div id="container-map">
                  <iframe
  title="Punjani Estate Khopat Thane Map"
  // src="https://www.google.com/maps?q=Punjani%20Industrial%20Estate%20Pokhran%20Road%20No%201%20Khopat%20Thane%20400601&output=embed"
  src="https://www.google.com/maps?q=113%202nd%20Floor%20Punjani%20Estate%20Khopat%20Pokhran%20Road%20No%201%20Thane%20400601&output=embed"
  width="100%"
  height="600"
  style={{ border: 0 }}
  loading="lazy"
/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact