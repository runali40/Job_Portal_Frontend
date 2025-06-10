import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GetManageResumeApi } from '../../Api/CandidateApi/AddResumeApi'

const ResumePage = () => {
  const navigate = useNavigate();
  const locationValue = useLocation();
  const { resumeId } = locationValue.state || {};
  console.log(resumeId, "resumeID");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [professionTitle, setProfessionTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allLocation, setAllLocation] = useState([]);
  const [website, setWebsite] = useState("");
  const [preHour, setPreHour] = useState("");
  const [age, setAge] = useState("");
  const [rId, setRId] = useState("");
  const [aboutMe, setAboutMe] = useState("")
  const [allEducation, setAllEducation] = useState([])
  const [allWorkExperience, setAllWorkExperience] = useState([])
  const [allSkills, setAllSkills] = useState([])

  useEffect(() => {
    GetManageResumeData();
  }, [])

  const GetManageResumeData = async () => {
    const data = await GetManageResumeApi(resumeId, navigate);
    console.log(data, "data 30");
    setAllEducation(data.educations);
    setAllWorkExperience(data.workExperiences);
    setAllSkills(data.skills);
    setName(data.model1.Name);
    setEmail(data.model1.Email);
    setProfessionTitle(data.model1.ProfessionTitle);
    setLocation(data.model1.LocationName);
    setWebsite(data.model1.Web);
    setPreHour(data.model1.PreHour);
    setAge(data.model1.Age);
    setRId(data.model1.Id);
    setAboutMe(data.model1.AboutMe)
    // setCategory(data.model1.CurrentIndustry)
  };
  return (
    <>
      <Header />
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
            {/* <div className="col-lg-4 col-md-4 col-xs-12">
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
            </div> */}
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="inner-box my-resume">
                <div className="author-resume">
                  <div className="thumb">
                    <img src="assets/img/resume/img-1.png" alt="" />
                  </div>
                  <div className="author-info text-start">
                    <h3>{name}</h3>
                    <p className="sub-title">{professionTitle}</p>
                    <p><span className="address"><i className="lni-map-marker"></i>{location}</span> <span><i className="ti-phone"></i>(+01) 211-123-5678</span></p>
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
                  <p>{aboutMe}</p>
                </div>
                <div className="work-experence item text-start">
                  <h3>Work Experience</h3>
                  {
                    allWorkExperience.map((data) => {
                      return (
                        <>
                          <h4>{data.Title}</h4>
                          <h5>Bannana INC.</h5>
                          <span className="date">{data.CompDateFrom}-{data.CompDateTo}(5year)</span>
                          <p>{data.WorkDescription}</p>
                          <p><NavLink to="/">4 Projects</NavLink></p>
                        </>

                      )
                    })
                  }

                  <br />
                  {/* <h4>UI Designer</h4>
                  <h5>Whale Creative</h5>
                  <span className="date">Fab 2017-Present(2year)</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero vero, dolores, officia quibusdam architecto sapiente eos voluptas odit ab veniam porro quae possimus itaque, quas! Tempora sequi nobis, atque incidunt!</p>
                  <p><NavLink to="/">4 Projects</NavLink></p> */}
                </div>
                <div className="education item text-start">
                  <h3>Education</h3>
                  {
                    allEducation.map((data) => {
                      return (
                        <>
                          <h4>{data.School}</h4>
                          <p>{data.School}</p>
                          <span className="date">{data.SchoolFrom}-{data.SchoolTo}</span>
                          <br />

                        </>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ResumePage