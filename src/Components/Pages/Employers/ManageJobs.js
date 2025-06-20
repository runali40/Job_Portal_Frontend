import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { ManageJobApi } from '../../../Api/EmployerApi/EmployeerApi'
import { FeaturedJobApi } from '../../../Api/EmployerApi/FeaturedApi'
import LeftSidebar from '../LeftSidebar'

const ManageJobs = () => {
  const navigate = useNavigate();
  const [allManageJobs, setAllManageJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    ManageJobData();
  }, [])

  const ManageJobData = async () => {
    const data = await ManageJobApi();
    console.log(data, 'manage job')
    setAllManageJobs(data)
  }

  const FeaturedJobData = async (Id, newStatus) => {
    const data = await FeaturedJobApi(Id, newStatus, navigate);
    console.log(data, "count data");
    await ManageJobData();

  }
  const [isFeatured, setIsFeatured] = useState("0");

  const handleStarClick = (Id, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    FeaturedJobData(Id, newStatus); // Send updated status to backend
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = allManageJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allManageJobs.length / itemsPerPage);

  return (
    <>
      <Header />
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
              {/* <div className="right-sideabr text-start">
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
              </div> */}
              <LeftSidebar/>
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


                {

                  currentJobs.map((data) => {
                    return (
                      <>
                        <div className="alerts-content">
                          <div className="row" key={data.Id}>
                            <div className="col-lg-3 col-md-5 col-xs-12">
                              <h3>{data.Slug}</h3>
                              <span className="location"><i className="lni-map-marker"></i>{data.LocationName}</span>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-12">
                               {
                              data.TypeofJob && <p><span className="full-time">Full-Time</span></p>                       
                            }
                            </div>
                            <div className="col-lg-3 col-md-2 col-xs-12">
                              <div className="can-img"><NavLink to="/"><img src="assets/img/jobs/candidates.png" alt="" /></NavLink></div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-xs-12">
                              {/* <p><i className="lni-star" onClick={()=>{FeaturedJobData(data.Id)}}></i></p> */}
                              <p>
                                {/* <i
                                  className={`lni-star ${data.Featured === "1" ? "lni-star-color  " : "text-white"}`}
                                  onClick={() => handleStarClick(data.Id, data.Featured)}
                                  style={{ cursor: "pointer" }}
                                ></i> */}
                                <span
                                  onClick={() => handleStarClick(data.Id, data.Featured)}
                                  style={{ cursor: "pointer", fontSize: "20px", color: data.Featured === "1" ? "blue" : "gray" }}
                                >
                                  {data.Featured === "1" ? "★" : "☆"}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }

                <br />

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

export default ManageJobs