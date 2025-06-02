import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetAllBrowseResumeApi } from '../../../Api/EmployerApi/BrowseResumeApi'

const BrowseResumes = () => {
  const navigate = useNavigate();
  const [allResume, setAllResume] = useState([])
  const [allSkills, setAllSkills] = useState([])

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
      console.log("Skills:", item.skills);
      setAllSkills(item.skills)
      console.log("Work Experiences:", item.workExperiences);
    });
  };

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
                  <div className="col-lg-12 col-md-6 col-xs-12">
                    <div className="manager-resumes-item">
                      <div className="manager-content">
                        <NavLink to="/resumePage">
                          <img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt="" />
                        </NavLink>
                        <div className="manager-info">
                          <div className="manager-name text-start">
                            <h4><NavLink to="/">{data.name}</NavLink></h4>
                            <h5>{data.professionTitle}</h5>
                          </div>
                          <div className="manager-meta">
                            <span className="location"><i className="ti-location-pin"></i>{data.locationName}</span>
                            <span className="rate"><i className="ti-time"></i> ₹{data.preHour} per hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="item-body">
                        <div className="content text-start">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
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
                            <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


            {/* <div className="col-lg-12 col-md-6 col-xs-12">
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.jpg" alt="" /></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Zane Joyner</NavLink></h4>
                      <h5>Front-end developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="ti-location-pin"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="ti-time"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="content text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
                  </div>
                  <div className="resume-skills text-start">
                    <div className="tag-list float-left">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap</span>
                      <span>Wordpress</span>
                    </div>
                    <div className="resume-exp float-right">
                      <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-1.png" alt="" /></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Bikesh Soltaniane</NavLink></h4>
                      <h5>Java developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="ti-location-pin"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="ti-time"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="content text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
                  </div>
                  <div className="resume-skills text-start">
                    <div className="tag-list float-left">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap</span>
                      <span>Wordpress</span>
                    </div>
                    <div className="resume-exp float-right">
                      <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-2.png" alt="" /></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Chris Hernandeziyan</NavLink></h4>
                      <h5>.Net developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="ti-location-pin"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="ti-time"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="content text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
                  </div>
                  <div className="resume-skills text-start">
                    <div className="tag-list float-left">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap</span>
                      <span>Wordpress</span>
                    </div>
                    <div className="resume-exp float-right">
                      <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-3.png" alt="" /></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Mary Amiri</NavLink></h4>
                      <h5>Quality assurance</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="ti-location-pin"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="ti-time"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="content text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
                  </div>
                  <div className="resume-skills text-start">
                    <div className="tag-list float-left">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap</span>
                      <span>Wordpress</span>
                    </div>
                    <div className="resume-exp float-right">
                      <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="manager-resumes-item">
                <div className="manager-content">
                  <NavLink to="/resumePage"><img className="resume-thumb" src="assets/img/jobs/avatar-4.png" alt="" /></NavLink>
                  <div className="manager-info">
                    <div className="manager-name text-start">
                      <h4><NavLink to="/">Sarah Luizgarden</NavLink></h4>
                      <h5>UI/UX developer</h5>
                    </div>
                    <div className="manager-meta">
                      <span className="location"><i className="ti-location-pin"></i> Cupertino, CA, USA</span>
                      <span className="rate"><i className="ti-time"></i> $55 per hour</span>
                    </div>
                  </div>
                </div>
                <div className="item-body">
                  <div className="content text-start">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>
                  </div>
                  <div className="resume-skills text-start">
                    <div className="tag-list float-left">
                      <span>HTML5</span>
                      <span>CSS3</span>
                      <span>Bootstrap</span>
                      <span>Wordpress</span>
                    </div>
                    <div className="resume-exp float-right">
                      <NavLink to="/" className="btn btn-common btn-xs">Exp. 4 Year</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BrowseResumes