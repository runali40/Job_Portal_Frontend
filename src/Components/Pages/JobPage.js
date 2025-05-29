import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import { GetCategoryApi, GetLocationApi, JobSearchApi } from '../../Api/HomeApi'
import { GetFeaturedApi } from '../../Api/EmployerApi/FeaturedApi'
import { BookmarkedJobApi } from '../../Api/CandidateApi/BookmarkedJobApi'

const JobPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("")
  const [allLocation, setAllLocation] = useState([])
  const [category, setCategory] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [allFeatures, setAllFeatures] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await GetLocationData();
      await GetCategoryData();
      await GetFeaturesData();
    };

    fetchData();
  }, []);

  const GetLocationData = async () => {
    const data = await GetLocationApi();
    setAllLocation(data)
  }

  const GetCategoryData = async () => {
    const data = await GetCategoryApi();
    setAllCategory(data)
  }

  const GetBrowseData = (id) => {
    console.log("30", id)
    navigate("/jobDetails", {
      state: { id },
    });
  };

  const GetFeaturesData = async () => {
    const data = await GetFeaturedApi(navigate);
    console.log(data, "get featured data");
    setAllFeatures(data)
  }

  const JobSearchData = async () => {
    const data = await JobSearchApi(location, category, navigate);
    console.log(data, "job search data");
    const featuredData = data.filter(item => item.Featured === "1");
    setAllFeatures(featuredData);
  }

  const BookmarkedJobData = async (Id, newStatus) => {
    const data = await BookmarkedJobApi(Id, newStatus, navigate);
    console.log(data, "count data");
    await GetFeaturesData();
  }

  const handleStarClick = (Id, currentStatus) => {
    const newStatus = currentStatus === "1" ? "0" : "1";
    BookmarkedJobData(Id, newStatus); // Send updated status to backend
  };
  return (
    <>
      <Header />


      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Find Job</h3>
              </div>
              <div className="job-search-form">
                <div>
                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-xs-12">
                      <div className="form-group">
                        <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-xs-12">
                      <div className="form-group">
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
                        <i className="lni-map-marker"></i>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-xs-12">
                      <div className="form-group">
                        <div className="search-category-container">
                          <label className="styled-select">
                            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                              <option value="" disabled hidden>Select Category</option>
                              {allCategory.map((data) => (
                                <option key={data.CategoryId} value={data.CategoryId}>
                                  {data.CategoryName}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                        <i className="lni-layers"></i>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-2 col-xs-12">
                      <button type="submit" className="button"><i className="lni-search" onClick={JobSearchData}></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="job-listings" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Jobs</h2>
            <p>Hand-picked jobs featured depending on popularity and benifits</p>
          </div>
          <div className="row">
            {
              allFeatures.map((data) => {
                return (
                  <div className="col-lg-6 col-md-12 col-xs-12" key={data.Id}>
                    <div className="job-listings-featured">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                          <div className="job-company-logo">
                            {/* <img src="assets/img/features/img1.png" alt="" /> */}
                            {data.LOGOFile && <img src={data.LOGOFile} alt="" style={{ width: "55px", height: "50px" }} />}
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
                )
              })
            }
            <div className="col-12 text-center mt-4">
              <NavLink to="/jobPage" className="btn btn-common">Browse All Jobs</NavLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default JobPage