import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const JobAlerts = () => {
  return (
   <>
   <Header/>
       <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Job Alerts</h3>
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
               
                <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>  
                <li><NavLink className="active" to="/jobAlerts">Job Alerts</NavLink></li> 
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="job-alerts-item text-start">
              <h3 className="alerts-title">Job Alerts</h3>
              <div className="alerts-list">
                <div className="row">
                  <div className="col-md-3">
                    <p>Name</p>
                  </div>
                  <div className="col-md-3">
                    <p>Keywords</p>
                  </div>
                  <div className="col-md-3">
                    <p>Contract Type</p>
                  </div>
                  <div className="col-md-3">
                    <p>Frequency</p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-md-3">
                    <h3>Web Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>
                  <div className="col-md-3">
                    <p>Web Designer</p>
                  </div>
                  <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Daily</p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-md-3">
                    <h3>UI/UX designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>
                  <div className="col-md-3">
                    <p>UI/UX designer</p>
                  </div>
                  <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Daily</p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-md-3">
                    <h3>Developer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>
                  <div className="col-md-3">
                    <p>Developer</p>
                  </div>
                  <div className="col-md-3">
                    <p><span className="part-time">Part-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Daily</p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-md-3">
                    <h3>Senior UX Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>
                  <div className="col-md-3">
                    <p>Senior UX Designer</p>
                  </div>
                  <div className="col-md-3">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-md-3">
                    <p>Daily</p>
                  </div>
                </div>
              </div>
              <br/>
           
              <ul className="pagination">              
                <li className="active"><NavLink to="#" className="btn-prev" ><i className="lni-angle-left"></i> prev</NavLink></li>
                <li><NavLink to="#">1</NavLink></li>
                <li><NavLink to="#">2</NavLink></li>
                <li><NavLink to="#">3</NavLink></li>
                <li><NavLink to="#">4</NavLink></li>
                <li><NavLink to="#">5</NavLink></li>
                <li className="active"><NavLink to="#" className="btn-next">Next <i className="lni-angle-right"></i></NavLink></li>
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

export default JobAlerts