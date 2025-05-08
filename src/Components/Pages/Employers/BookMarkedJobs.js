import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink } from 'react-router-dom'

const BookMarkedJobs = () => {
  return (
    <>
    <Header/>
        <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Bookmarked</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="right-sideabr text-start">
              <h4>Manage Account</h4>
              <ul className="list-item">
                <li><NavLink to="/resume">My Resume</NavLink></li>
                <li><NavLink className="active" to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>
                <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sing Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-xs-12">
            <div className="job-alerts-item bookmarked text-start">
              <h3 className="alerts-title">Bookmarked Jobs</h3>
              <NavLink className="job-listings" to="/jobDetails">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-xs-12">
                    <div className="job-company-logo">
                      <img src="assets/img/features/img1.png" alt=""/>
                    </div>
                    <div className="job-details">
                      <h3>App Developer</h3>
                      <span className="company-neme">
                        AmazeSoft
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                   <div className="location">
                     <i className="lni-map-marker"></i> New Yourk, US
                   </div>
                  </div>
                  <div className="col-lg-2 col-md-12 col-xs-12 text-right">
                    <span className="btn-full-time">Full Time</span>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                    <span className="btn-apply">Apply Now</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="job-listings" to="/jobDetails">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-xs-12">
                    <div className="job-company-logo">
                      <img src="assets/img/features/img2.png" alt=""/>
                    </div>
                    <div className="job-details">
                      <h3>Graphic Designer</h3>
                      <span className="company-neme">
                        Hunter Inc.
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                   <div className="location">
                     <i className="lni-map-marker"></i> New Yourk, US
                   </div>
                  </div>
                  <div className="col-lg-2 col-md-12 col-xs-12 text-right">
                    <span className="btn-full-time">Full Time</span>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                    <span className="btn-apply">Apply Now</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="job-listings" to="/jobDetails">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-xs-12">
                    <div className="job-company-logo">
                      <img src="assets/img/features/img3.png" alt=""/>
                    </div>
                    <div className="job-details">
                      <h3>Managing Director</h3>
                      <span className="company-neme">
                        MagNews
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                   <div className="location">
                     <i className="lni-map-marker"></i> New Yourk, US
                   </div>
                  </div>
                  <div className="col-lg-2 col-md-12 col-xs-12 text-right">
                    <span className="btn-full-time">Full Time</span>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                    <span className="btn-apply">Apply Now</span>
                  </div>
                </div>
              </NavLink>
              <NavLink className="job-listings" to="/jobDetails">
                <div className="row">
                  <div className="col-lg-4 col-md-12 col-xs-12">
                    <div className="job-company-logo">
                      <img src="assets/img/features/img4.png" alt=""/>
                    </div>
                    <div className="job-details">
                      <h3>Software Engineer</h3>
                      <span className="company-neme">
                        AmazeSoft
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                   <div className="location">
                     <i className="lni-map-marker"></i> New Yourk, US
                   </div>
                  </div>
                  <div className="col-lg-2 col-md-12 col-xs-12 text-right">
                    <span className="btn-full-time">Full Time</span>
                  </div>
                  <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                    <span className="btn-apply">Apply Now</span>
                  </div>
                </div>
              </NavLink>
          
              <ul className="pagination">              
                <li className="active"><NavLink to="/" className="btn btn-common" ><i className="ti-angle-left"></i> prev</NavLink></li>
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="/">2</NavLink></li>
                <li><NavLink to="/">3</NavLink></li>
                <li><NavLink to="/">4</NavLink></li>
                <li><NavLink to="/">5</NavLink></li>
                <li className="active"><NavLink to="/" className="btn btn-common">Next <i className="ti-angle-right"></i></NavLink></li>
              </ul>
             
            </div>
          </div>
        </div>
      </div>      
    </div>
    <Footer/>
    </>
  )
}

export default BookMarkedJobs