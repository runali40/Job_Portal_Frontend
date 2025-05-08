import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const ResumePage = () => {
  return (
    <>
     <Header/>

    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Resume</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container">        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-xs-12">
            <div className="right-sideabr">
              <h4>Manage Account</h4>
              <ul className="list-item text-start">
                <li><NavLink className="active" to="/resumePage">My Resume</NavLink></li>
                <li><NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>           
                <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>  
                <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li> 
                <li><NavLink to="/changePassword">Change Password</NavLink></li>
                <li><NavLink to="/">Sign Out</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-xs-12">
            <div className="inner-box my-resume">
              <div className="author-resume">
                <div className="thumb">
                  <img src="assets/img/resume/img-1.png" alt=""/>
                </div>
                <div className="author-info text-start">
                  <h3>Mark Anderson</h3>
                  <p className="sub-title">UI/UX Designer</p>
                  <p><span className="address"><i className="lni-map-marker"></i>Mahattan, NYC, USA</span> <span><i className="ti-phone"></i>(+01) 211-123-5678</span></p>
                  <div className="social-link">  
                    <NavLink to="/" className="Twitter"><i className="lni-twitter-filled"></i></NavLink>
                    <NavLink to="/" className="facebook"><i className="lni-facebook-filled"></i></NavLink>
                    <NavLink to="/" className="google"><i className="lni-google-plus"></i></NavLink>
                    <NavLink to="/" className="linkedin"><i className="lni-linkedin-fill"></i></NavLink>
                  </div>
                </div>                  
              </div>
              <div className="about-me item text-start">
                <h3>About Me</h3>
                <p>Nullam semper erat arcu, ac tincidunt sem venenatis vel. Curabitur a dolor ac ligula fermentum eusmod ac ullamcorper nulla. Integer blandit uitricies aliquam. Pellentesque quis dui varius, dapibus vilit id, ipsum. Morbi ac eros feugiat, lacinia elit ut, elementum turpis. Curabitur justo sapien, tempus sit amet ruturm eu, commodo eu lacus. Morbi in ligula nibh. Maecenas ut mi at odio hendririt eleif end tempor vitae augue. Fusce eget arcu et nibh dapibus maximus consectetur in est. Sed iaculis Luctus nibh sed veneatis. </p>
              </div>
              <div className="work-experence item text-start">
                <h3>Work Experience</h3>
                <h4>UI/UX Designer</h4>
                <h5>Bannana INC.</h5>
                <span className="date">Fab 2017-Present(5year)</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, dolores, officia quibusdam architecto sapiente eos voluptas odit ab veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque incidunt!</p>
                <p><NavLink to="/">4 Projects</NavLink></p>
                <br/>
                <h4>UI Designer</h4>
                <h5>Whale Creative</h5>
                <span className="date">Fab 2017-Present(2year)</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, dolores, officia quibusdam architecto sapiente eos voluptas odit ab veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque incidunt!</p>
                <p><NavLink to="/">4 Projects</NavLink></p>
              </div>
              <div className="education item text-start">
                <h3>Education</h3>
                <h4>Massachusetts Institute Of Technology</h4>
                <p>Bachelor of Computer Science</p>
                <span className="date">2010-2014</span>
                <br/>
                <h4>Massachusetts Institute Of Technology</h4>
                <p>Bachelor of Computer Science</p>
                <span className="date">2010-2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>

<Footer/>
    </>
  )
}

export default ResumePage