import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { GetManageResumeApi, GetManageResumeApi1 } from '../../Api/CandidateApi/AddResumeApi'

const ResumePage = () => {
  const navigate = useNavigate();
  const locationValue = useLocation();
  // const { resumeId } = locationValue.state || {};
  const resumeId = sessionStorage.getItem('resumeId')
  console.log(resumeId, "resumeID");
  console.log(resumeId, typeof resumeId);
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
  const [profilePhoto, setProfilePhoto] = useState("")

  useEffect(() => {
    const resumeId = sessionStorage.getItem("resumeId");

    if (resumeId && resumeId !== "null") {
      GetManageResumeData();
    }
  }, []);

  const GetManageResumeData = async () => {

    try {
      const data = await GetManageResumeApi(resumeId, navigate);

      console.log(data, "data 30");

      if (!data) return; // ✅ stop if null

      setAllEducation(data?.educations || []);
      setAllWorkExperience(data?.workExperiences || []);
      setAllSkills(data?.skills || []);

      const model = data?.model1 || {};

      setName(model?.Name || "");
      setEmail(model?.Email || "");
      setProfessionTitle(model?.ProfessionTitle || "");
      setLocation(model?.LocationName || "");
      setWebsite(model?.Web || "");
      setPreHour(model?.PreHour || "");
      setAge(model?.Age || "");
      setRId(model?.Id || "");
      setAboutMe(model?.AboutMe || "");
      setProfilePhoto(model?.ProfilePhoto || "");
    } catch (error) {
      console.log("Error in GetManageResumeData:", error);
      // ❌ UI break nahi hoga
    }


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
      {(resumeId && resumeId !== "null") ? (
        <div className="section">
          <div className="container">
            <div className="row">

              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="inner-box my-resume">
                  <div className="author-resume">
                    <div className="thumb">
                      <img src={profilePhoto ? profilePhoto : "assets/img/jobs/avatar-1.jpg"} alt="profile" />
                    </div>
                    <div className="author-info text-start">
                      <h3>{name}</h3>
                      <p className="sub-title">{professionTitle}</p>
                      <p><span className="address"><i className="lni-map-marker"></i>{location}</span> <span><i className="ti-phone"></i>(+91) 211-123-5678</span></p>
                      <div className="social-link">
                        <NavLink className="Twitter"><i className="lni-twitter-filled"></i></NavLink>
                        <NavLink className="facebook"><i className="lni-facebook-filled"></i></NavLink>
                        <NavLink className="google"><i className="lni-google-plus"></i></NavLink>
                        <NavLink className="linkedin"><i className="lni-linkedin-fill"></i></NavLink>
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
                            <h5>{data.CompanyName}</h5>
                            <span className="date">{data.CompDateFrom}-{data.CompDateTo}({data.CompDateTo - data.CompDateFrom} years)</span>
                            <p>{data.workDescription}</p>
                            {/* <p><NavLink >4 Projects</NavLink></p> */}
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
                            <p>{data.Degree}</p>
                            <span className="date">{data.SchoolFrom}-{data.SchoolTo}</span>
                            <br />

                          </>
                        )
                      })
                    }

                  </div>

                  <div className="education item text-start">
                    <h3>Skills</h3>

                    {allSkills.map((data, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between">
                          <h4 className="mb-0">{data.SkillName}</h4>
                          <span>{data.SkillProficiency}%</span>
                        </div>

                        <div className="progress mt-1" >
                          <div
                            className="progress-bar"
                            style={{ width: `${data.SkillProficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :
        (
          <div className="text-center py-4">
            <p>Resume data is not available...</p>
            <button
              className="btn btn-primary mt-2"
              onClick={() => navigate("/uploadCv")}
            >
              Upload CV
            </button>
          </div>
        )}
      <Footer />
    </>
  )
}

export default ResumePage