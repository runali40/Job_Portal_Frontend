import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink } from 'react-router-dom'

const ManageJobs = () => {
  return (
    <>
    <Header/>
        <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Manage Jobs</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr text-start">
              <h4>Manage Account</h4>
              <ul className="list-item">
                <li><NavLink to="/resumePage">My Resume</NavLink></li>
                <li><NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                <li><NavLink className="active" to="/manageJobs">Manage Jobs</NavLink></li>
                <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>   
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="job-alerts-item candidates text-start">
              <h3 className="alerts-title">Manage Jobs</h3>
              <div className="alerts-list">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p>Name</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p>Keywords</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p>Candidates</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p>Featured</p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-xs-12">
                    <h3>Web Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>                    
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <div className="can-img"><NavLink to="/"><img src="assets/img/jobs/candidates.png" alt=""/></NavLink></div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <p><i className="lni-star"></i></p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-xs-12">
                    <h3>Web Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>                    
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <div className="can-img"><NavLink to="/"><img src="assets/img/jobs/candidates.png" alt=""/></NavLink></div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <p><i className="lni-star"></i></p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-xs-12">
                    <h3>Web Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>                    
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <div className="can-img"><NavLink to="/"><img src="assets/img/jobs/candidates.png" alt=""/></NavLink></div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <p><i className="lni-star"></i></p>
                  </div>
                </div>
              </div>
              <div className="alerts-content">
                <div className="row">
                  <div className="col-lg-3 col-md-5 col-xs-12">
                    <h3>Web Designer</h3>
                    <span className="location"><i className="lni-map-marker"></i> Manhattan, NYC</span>
                  </div>                    
                  <div className="col-lg-3 col-md-3 col-xs-12">
                    <p><span className="full-time">Full-Time</span></p>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <div className="can-img"><NavLink to="/"><img src="assets/img/jobs/candidates.png" alt=""/></NavLink></div>
                  </div>
                  <div className="col-lg-3 col-md-2 col-xs-12">
                    <p><i className="lni-star"></i></p>
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

export default ManageJobs