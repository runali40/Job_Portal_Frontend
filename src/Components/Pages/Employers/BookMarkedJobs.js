import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { getBookmarkedJob } from '../../../Api/CandidateApi/BookmarkedJobApi'
import LeftSidebar from '../LeftSidebar'
import { ApplyJobApi } from '../../../Api/CandidateApi/AddResumeApi'

const BookMarkedJobs = () => {
  const [allBookmarked, setAllBookmarked] = useState([])
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    GetAllBookmarkedData();
  }, [])

  const GetAllBookmarkedData = async () => {
    const data = await getBookmarkedJob(navigate);
    console.log(data, "get bookmarked data");
    setAllBookmarked(data)
  }

  const GetBookmarkedData = (id) => {
    console.log("30")
    navigate("/jobDetails", {
      state: { id },
    });
  };

      // const ApplyJobData = async () => {
      //     // await ApplyJobApi(jobTitle, jobDetailId, resumeUrl, navigate);
  
      // };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = allBookmarked.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allBookmarked.length / itemsPerPage);

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Bookmarked</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              {/* <div className="right-sideabr text-start">
                <h4>Manage Account</h4>
                <ul className="list-item">
                  <li><NavLink to="/resume">My Resume</NavLink></li>
                  <li><NavLink className="active" to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                  <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                  <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>
                  <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                  <li><NavLink to="/changePassword">Change Password</NavLink></li>
                  <li><NavLink to="/">Sing Out</NavLink></li>
                </ul>
              </div> */}
              <LeftSidebar />
            </div>
            <div className="col-lg-8 col-md-6 col-xs-12">
              <div className="job-alerts-item bookmarked text-start">
                <h3 className="alerts-title">Bookmarked Jobs</h3>
                {
                  currentJobs.map((data) => {
                    return (
                      <div className="job-listings" onClick={() => GetBookmarkedData(data.Id)} style={{ cursor: "pointer" }}>
                        <div className="row">
                          <div className="col-lg-4 col-md-12 col-xs-12">
                            <div className="job-company-logo">
                              <img src={data.LOGOFile} alt="" style={{ width: "55px", height: "50px" }} />
                            </div>
                            <div className="job-details">
                              <h3>{data.Slug}</h3>
                              <span className="company-neme">
                                {data.Name}
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                            <div className="location">
                              <i className="lni-map-marker"></i>{data.LocationName}
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-12 col-xs-12 text-right">
                            <span className="btn-full-time">Full Time</span>
                          </div>
                          {/* <div className="col-lg-3 col-md-12 col-xs-12 text-right">
                            <span className="btn-apply" onClick={()=>ApplyJobData(data.Slug, data.Id,)}>Apply Now</span>
                          </div> */}
                        </div>
                      </div>
                    )
                  })
                }

                <div className="col-lg-12 col-md-12 col-xs-12">
                  <ul className="pagination">
                    <li className={currentPage === 1 ? "disabled" : "active"}>
                      <button
                        className="btn btn-prev"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        <i className="lni-angle-left"></i> Prev
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, index) => (
                      <li key={index} className={currentPage === index + 1 ? "active" : ""}>
                        <button className='btn btn-prev' onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                      </li>
                    ))}

                    <li className={currentPage === totalPages ? "disabled" : "active"}>
                      <button
                        className="btn btn-next"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        Next <i className="lni-angle-right"></i>
                      </button>
                    </li>
                  </ul>
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

export default BookMarkedJobs