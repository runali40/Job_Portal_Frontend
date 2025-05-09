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

  const ContactData = () => {
    ContactApi(name, email, subject, message).then((data) => {
      console.log("data", data)
    })
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
                      <p><NavLink to="/">Mob No: +91 9321148952</NavLink></p>
                      <p><NavLink to="/">Contact No: 022-40057002</NavLink></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div id="container-map">
                  <iframe
                    title="Khopat, Thane East Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.977654321!3d19.197654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9c123456789%3A0xabcdef1234567890!2sKhopat%2C%20Thane%20East%2C%20Maharashtra%20400601%2C%20India!5e0!3m2!1sen!2sin!4v1620000000000"
                    width="100%"
                    height="600"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
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