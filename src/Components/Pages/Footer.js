import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <>
       <footer>

<section className="footer-Content">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-3 col-xs-12">
                <div className="widget">
                    <div className="footer-logo"><img src="assets/img/logo-footer.png" alt="" /></div>
                    <div className="textwidget text-start">
                        <p>Find jobs that match your skills, experience, and passion. We bring candidates and companies together on one trusted platform to make hiring faster and smarter.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-4 col-xs-12">
                <div className="widget text-start">
                    <h3 className="block-title">Quick Links</h3>
                    <ul className="menu">
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/">Support</NavLink></li>
                        <li><NavLink to="/">License</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <ul className="menu text-start">
                        <li><NavLink to="/">Terms & Conditions</NavLink></li>
                        <li><NavLink to="/privacyPolicy">Privacy</NavLink></li>
                        <li><NavLink to="/">Refferal Terms</NavLink></li>
                        <li><NavLink to="/">Product License</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-12">
                <div className="widget text-start">
                    <h3 className="block-title">Subscribe Now</h3>
                    <p>subscribe this.</p>
                    <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                        <div className="form-group is-empty">
                            <input type="email"  name="Email" className="form-control" id="EMAIL" placeholder="Enter Email..." required="" />
                            <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-envelope"></i></button>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                    <ul className="mt-3 footer-social">
                        <li><NavLink className="facebook" to="/"><i className="lni-facebook-filled"></i></NavLink></li>
                        <li><NavLink className="twitter" to="/"><i className="lni-twitter-filled"></i></NavLink></li>
                        <li><NavLink className="linkedin" to="/"><i className="lni-linkedin-fill"></i></NavLink></li>
                        <li><NavLink className="google-plus" to="/"><i className="lni-google-plus"></i></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

<div id="copyright">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="site-info text-center">
                    <p>Designed and Developed by <NavLink to="https://uideck.com/" rel="nofollow">UIdeck</NavLink></p>
                </div>
            </div>
        </div>
    </div>
</div>

</footer>
   </>
  )
}

export default Footer