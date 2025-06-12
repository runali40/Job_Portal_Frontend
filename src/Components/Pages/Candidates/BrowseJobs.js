import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useNavigate , useLocation} from 'react-router-dom'
import { ManageJobApi } from '../../../Api/EmployerApi/EmployeerApi'
import { BookmarkedJobApi } from '../../../Api/CandidateApi/BookmarkedJobApi'
import { GetLocationApi, JobSearchApi } from '../../../Api/HomeApi'

const BrowseJobs = () => {
  const navigate = useNavigate();
  const locationValue = useLocation();
  const { categoryId } = locationValue.state || {};
  console.log(locationValue.state, "10")
  console.log("Received ID:", categoryId);
  const [location, setLocation] = useState("")
  const [allLocation, setAllLocation] = useState([])
  const [allBrowseJobs, setAllBrowseJobs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetLocationData();  // waits fully
        await BrowseJobData();  // uses updated token

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const GetLocationData = async () => {
    const data = await GetLocationApi(navigate);
    setAllLocation(data);
  };

  const BrowseJobData = async () => {
    const data = await ManageJobApi(categoryId, navigate);
    console.log(data, 'browse job')
    setAllBrowseJobs(data)
  }

  const GetBrowseData = (id) => {
    console.log("30")
    navigate("/jobDetails", {
      state: { id },
    });
  };

  const JobSearchData = async () => {
    const data = await JobSearchApi(location, null, navigate);
    console.log(data, "job search data");
    setAllBrowseJobs(data);
  }

  const BookmarkedJobData = async (Id, newStatus) => {
    const data = await BookmarkedJobApi(Id, newStatus, navigate);
    console.log(data, "count data");
    await BrowseJobData();

  }

  const handleStarClick = (Id, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    BookmarkedJobData(Id, newStatus); // Send updated status to backend
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = allBrowseJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allBrowseJobs.length / itemsPerPage);
  
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Browse Job</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="job-browse section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="wrap-search-filter row">
                <div className="col-lg-5 col-md-5 col-xs-12">
                  <input type="text" className="form-control" placeholder="Keyword: Name, Tag" />
                </div>
                <div className="col-lg-5 col-md-5 col-xs-12">
                  {/* <input type="text" className="form-control" placeholder="Location: City, State, Zip" /> */}
                  <div className="form-group" style={{ border: '1px solid #ced4da', borderRadius: "4px" }}>
                    <div className="search-category-container">
                      <label className="styled-select">

                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                          <option value="" disabled hidden>Select Location</option>
                          {allLocation.map((data) => (
                            <option key={data.LocationId} value={data.LocationId}>
                              {data.LocationName}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                  <button type="submit" className="btn btn-common float-right" onClick={JobSearchData}>Filter</button>
                </div>
              </div>
            </div>
            {
              currentJobs.map((data) => {
                return (
                  <>
                    <div className="col-lg-6 col-md-12 col-xs-12" key={data.Id}>
                      <div className="job-listings-featured" /* to="/jobDetails" */ >
                        <div className="row ">
                          <div className="col-lg-6 col-md-6 col-xs-12 ">
                            <div className="job-company-logo">
                              <img src={data.LOGOFile} alt="" style={{ width: "55px", height: "50px" }} />
                            </div>
                            <div className="job-details text-start">
                              <h3 onClick={() => GetBrowseData(data.Id)} style={{ cursor: "pointer" }}>{data.Slug}</h3>
                              <span className="company-neme" onClick={() => GetBrowseData(data.Id)} style={{ cursor: "pointer" }}>{data.Name}</span>
                              <div className="tags">
                                <span><i className="lni-map-marker"></i>{data.LocationName}</span>
                                <span><i className="lni-user"></i>John Smith</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                            <div className="tag-type">
                              {/* <span className="heart-icon">
                                <i className="lni-heart"></i>
                              </span> */}
                              <span
                                onClick={() => handleStarClick(data.Id, data.Bookmark)}
                                style={{ cursor: "pointer", fontSize: "20px", color: data.Bookmark === "1" ? "blue" : "gray" }}
                              >
                                {/* {data.Bookmark === "1" ? "♥" : "♡"} */}
                                <i className={data.Bookmark === "1" ? "fas fa-heart" : "far fa-heart"}></i>
                              </span>
                              <span className="full-time">Full Time</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
            {/* <div className="col-lg-12 col-md-12 col-xs-12">

              <ul className="pagination">
                <li className="active"><NavLink to="/" className="btn-prev" ><i className="lni-angle-left"></i> prev</NavLink></li>
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="/">2</NavLink></li>
                <li><NavLink to="/">3</NavLink></li>
                <li><NavLink to="/">4</NavLink></li>
                <li><NavLink to="/">5</NavLink></li>
                <li className="active"><NavLink to="/" className="btn-next">Next <i className="lni-angle-right"></i></NavLink></li>
              </ul>

            </div> */}
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
      </section>
      <Footer />
    </>
  )
}

export default BrowseJobs