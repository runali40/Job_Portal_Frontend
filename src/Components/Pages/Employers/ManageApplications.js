import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink } from 'react-router-dom'

const ManageApplications = () => {
  return (
   <>
   <Header/>
       <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Manage Applications</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-12 col-xs-12">
            <div className="right-sideabr text-start">
              <h4>Manage Account</h4>
              <ul className="list-item">
                <li><NavLink to="/resumePage">My Resume</NavLink></li>
                <li><NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                <li><NavLink className="active" to="/manageJobs">Manage Applications</NavLink></li>
                <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="job-alerts-item text-start">
              <h3 className="alerts-title">Manage applications</h3>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Web Designer Meeded</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Rejected</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Front-end developer needed</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Processed</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>We're looking for an Art Director</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="part-time">Part-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Rejected</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Web designer needed</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Approved</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>Looking for a Project Leader</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Rejected</p>
                  </div>
                </div>
              </div>
              <div className="applications-content">
                <div className="row">
                  <div className="col-md-4">
                    <div className="thums">
                      <img src="assets/img/jobs/img-1.jpg" alt=""/>
                    </div>
                    <h3>We're hiring an fullstack designer</h3>
                    <span>Quick Studio</span>
                  </div>
                   <div className="col-md-3">
                    <p><span className="part-time">Part-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Nov 14th, 2017</p>
                  </div>                   
                  <div className="col-md-2">
                    <p>Rejected</p>
                  </div>
                </div>
              </div>
              <br/>
            
              <ul className="pagination">              
                <li className="active"><NavLink to="/" className="btn-prev" ><i className="lni-angle-left"></i> prev</NavLink></li>
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="/">2</NavLink></li>
                <li><NavLink to="/">3</NavLink></li>
                <li><NavLink to="/">4</NavLink></li>
                <li><NavLink to="/">5</NavLink></li>
                <li className="active"><NavLink to="/" className="btn-next">Next <i className="lni-angle-right"></i></NavLink></li>
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

export default ManageApplications