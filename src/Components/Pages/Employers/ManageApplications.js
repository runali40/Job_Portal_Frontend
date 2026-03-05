import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetAllAppliedCandidateApi } from '../../../Api/EmployerApi/NotificationApi'
import LeftSidebar from '../LeftSidebar'

const ManageApplications = () => {
  const navigate = useNavigate();
  const [allApplications, setAllApplications] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetAllAppliedCandidateData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const GetAllAppliedCandidateData = async () => {
    const data = await GetAllAppliedCandidateApi(navigate);
    console.log(data);
    setAllApplications(data)
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = allApplications.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allApplications.length / itemsPerPage);

  return (

    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Manage Applications</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-xs-12">

              <LeftSidebar />
            </div>
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="job-alerts-item text-start">
                <h3 className="alerts-title">Manage applications</h3>
                {
                  currentJobs.map((data) => {
                    return (
                      <div className="applications-content">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="thums">
                              {/* <img src="assets/img/jobs/img-1.jpg" alt="" /> */}
                              <img src={data.ProfilePhoto ? data.ProfilePhoto : "assets/img/jobs/avatar-1.jpg"} alt="" style={{ borderRadius: "55%", height: "50px", width: "50px" }} />
                            </div>
                            {/* <h3>Web Designer Meeded</h3> */}
                            <h3>{data.Name}</h3>
                            {/* <span>Quick Studio</span> */}
                            <span className='text-left block'>{data.PostName}</span>
                          </div>
                          <div className="col-md-2">
                            {
                              data.TypeofJob && <p><span className="full-time">Full-Time</span></p>
                            }

                          </div>
                          <div className="col-md-3">
                            {/* <p>Nov 14th, 2017</p> */}
                            <p>{data.AppliedDate ? data.AppliedDate.split("T")[0] : null}</p>
                          </div>
                          <div className="col-md-2">
                            <p>{data.statusbyemployee}</p>
                          </div>
                        </div>
                      </div>
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

export default ManageApplications