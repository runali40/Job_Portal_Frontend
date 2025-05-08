import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const ManageResume = () => {
  return (
   <>
   <Header/>
       <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Manage Resumes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-12 col-xs-12">
            <div className="right-sideabr">
              <h4>Manage Account</h4>
              <ul className="list-item text-start">
                <li><NavLink to="/resumePage">My Resume</NavLink></li>
                <li><NavLink to="/bookmarkedJobs">Bookmarked Jobs</NavLink></li>
                <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                <li><NavLink to="/mangeApplications">Manage Applications</NavLink></li>
                <li><NavLink className="active" to="/manageResumes">Manage Resume</NavLink></li>
                <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="job-alerts-item candidates">
              <h3 className="alerts-title text-start">Manage Resumes</h3>
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Zane Joyner</NavLink></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <NavLink className="btn btn-xs btn-gray" to="/">Hide</NavLink>
                    <NavLink className="btn btn-xs btn-gray" to="/">Edit</NavLink>
                    <NavLink className="btn btn-xs btn-danger" to="/">Delete</NavLink>
                  </div>
                </div>
              </div>     
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Zane Joyner</NavLink></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <NavLink className="btn btn-xs btn-gray" to="/">Hide</NavLink>
                    <NavLink className="btn btn-xs btn-gray" to="/">Edit</NavLink>
                    <NavLink className="btn btn-xs btn-danger" to="/">Delete</NavLink>
                  </div>
                </div>
              </div>  
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Zane Joyner</NavLink></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <NavLink className="btn btn-xs btn-gray" to="/">Hide</NavLink>
                    <NavLink className="btn btn-xs btn-gray" to="/">Edit</NavLink>
                    <NavLink className="btn btn-xs btn-danger" to="/">Delete</NavLink>
                  </div>
                </div>
              </div>  
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt=""/></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Zane Joyner</NavLink></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="lni-map-marker"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="lni-alarm-clock"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="update-date">
                  <p className="status">
                    <strong>Updated on:</strong> Fab 22, 2020
                  </p>
                  <div className="action-btn">
                    <NavLink className="btn btn-xs btn-gray" to="/">Hide</NavLink>
                    <NavLink className="btn btn-xs btn-gray" to="/">Edit</NavLink>
                    <NavLink className="btn btn-xs btn-danger" to="/">Delete</NavLink>
                  </div>
                </div>
              </div>    
              <NavLink className="btn btn-common btn-sm" to="add-/resumePage">Add new resume</NavLink>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <Footer/>
   </>
  )
}

export default ManageResume