import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import { ManageResumeApi } from '../../../Api/CandidateApi/AddResumeApi'

const ManageResume = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [professionTitle, setProfessionTitle] = useState("")
  const [locationName, setLocationName] = useState("")
  const [perHour, setPerHour] = useState("")
  const [resumeId, setResumeId] = useState("")
  const [updatedDate, setUpdatedDate] = useState("")
  const [profilePhoto, setProfilePhoto] = useState("")

  useEffect(() => {
    ManageResumeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const ManageResumeData = async() => {
    const data = await ManageResumeApi(navigate);
    console.log(data[0])
    setName(data[0].Name)
    setProfessionTitle(data[0].ProfessionTitle)
    setLocationName(data[0].LocationName)
    setPerHour(data[0].PreHour)
    setResumeId(data[0].Id)
    setUpdatedDate(data[0].UpdatedDate)
    setProfilePhoto(data[0].ProfilePhoto)
  }

  const GetResumeData = (resumeId) => {
    console.log("30")
    navigate("/addResume", {
      state: { resumeId },
    }
    )
  }
  return (
    <>
      <Header />
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
                  <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>
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
                    <NavLink to="/resumePage"><img className="resume-thumb" src={profilePhoto} alt="" /></NavLink>
                    <div className="manager-info">
                      <div className="manager-name text-start">
                        <h4>{name}</h4>
                        <h5>{professionTitle}</h5>
                      </div>
                      <div className="manager-meta">
                        <span className="location"><i className="lni-map-marker"></i> {locationName}</span>
                        <span className="rate"><i className="lni-alarm-clock"></i> ₹ {perHour} per hour</span>
                      </div>
                    </div>
                  </div>
                  <div className="update-date">
                    <p className="status">
                      <strong>Updated on:</strong> {updatedDate}
                    </p>
                    <div className="action-btn">
                      <NavLink className="btn btn-xs btn-gray" to="/">Hide</NavLink>
                      <button className="btn btn-xs btn-gray" onClick={() => GetResumeData(resumeId)}>Edit</button>
                      {/* <NavLink className="btn btn-xs btn-danger" to="/">Delete</NavLink> */}
                    </div>
                  </div>
                </div>
                <div className='text-start'>
                  <NavLink className="btn btn-common btn-sm" to="/addResume">Add new resume</NavLink>
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

export default ManageResume