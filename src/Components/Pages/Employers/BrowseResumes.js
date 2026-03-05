import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetAllBrowseResumeApi } from '../../../Api/EmployerApi/BrowseResumeApi'

const BrowseResumes = () => {
  const navigate = useNavigate();
  const [allResume, setAllResume] = useState([])
  const [allSkills, setAllSkills] = useState([])
  const [resumeId, setResumeId] = useState("")


  useEffect(() => {
    getAllResumeData()
  }, [])

  const getAllResumeData = async () => {
    const data = await GetAllBrowseResumeApi(navigate); // await the API call
    console.log(data); // Logs the entire array
    setAllResume(data)
    data.forEach((item, index) => {
      console.log(`Resume ${index + 1}:`);
      console.log("Educations:", item.educations);
      console.log("resumeID:", item.educations[0].resumeId);
      setResumeId(item.educations[0].resumeId)

      console.log("Skills:", item.skills);
      setAllSkills(item.skills)
      console.log("Work Experiences:", item.workExperiences);
    });
  };

  const GetResumeData = (resumeId) => {
    sessionStorage.setItem("resumeId", resumeId)
    console.log("30")
    navigate("/resumePage", {
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
                <h3>Browse Resumes</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        <div className="container">
          <div className="row">
            {
              allResume.map((data) => {
                return (
                  <div className="col-lg-12 col-md-6 col-xs-12" key={data.id || data.resumeId}>
                    <div className="manager-resumes-item" style={{cursor: "pointer"}}>
                      <div className="manager-content" onClick={() => GetResumeData(data.id)}>

                        <img className="resume-thumb" src={data.profilePhoto ? data.profilePhoto : "assets/img/jobs/avatar-1.jpg"} alt="" />

                        <div className="manager-info">
                          <div className="manager-name text-start">
                            <h4>{data.name}</h4>
                            <h5>{data.professionTitle}</h5>
                          </div>
                          <div className="manager-meta">
                            <span className="location"><i className="ti-location-pin"></i>{data.locationName}</span>
                            {/* <span className="rate"><i className="ti-time"></i> ₹{data.preHour} per hour</span> */}
                          </div>
                        </div>
                      </div>
                      <div className="item-body">
                        <div className="content text-start">
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p> */}
                        <p>{data.aboutme}</p>
                        </div>
                        <div className="resume-skills text-start">
                          <div className="tag-list float-left">
                            {
                              data.skills && data.skills.map((item, i) => (
                                <span key={i}>{item.skillName}</span>
                              ))
                            }
                          </div>
                          <div className="resume-exp float-right">
                            <NavLink /* to="/" */ className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BrowseResumes