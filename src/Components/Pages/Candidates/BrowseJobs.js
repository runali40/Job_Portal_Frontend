import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import { ManageJobApi } from '../../../Api/EmployerApi/EmployeerApi'

const BrowseJobs = () => {
  const navigate = useNavigate();
  const [allBrowseJobs, setAllBrowseJobs] = useState([])

  useEffect(() => {
    BrowseJobData();
  }, [])


  const BrowseJobData = () => {
    ManageJobApi().then((data) => {
      console.log(data, 'browse job')
      setAllBrowseJobs(data)
    })
  }

  const GetBrowseData = (id) => {
    console.log("30")
    navigate("/jobDetails", {
      state: { id },
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
                  <input type="text" className="form-control" placeholder="Location: City, State, Zip" />
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12">
                  <button type="submit" className="btn btn-common float-right">Filter</button>
                </div>
              </div>
            </div>
            {
              allBrowseJobs.map((data) => {
                return (
                  <>
                    <div className="col-lg-6 col-md-12 col-xs-12" key={data.Id}>
                      <div className="job-listings-featured" /* to="/jobDetails" */ onClick={() => GetBrowseData(data.Id)} style={{ cursor: "pointer" }}>
                        <div className="row ">
                          <div className="col-lg-6 col-md-6 col-xs-12 ">
                            <div className="job-company-logo">
                              <img src={data.LOGOFile} alt="" style={{ width: "55px", height: "50px" }} />
                            </div>
                            <div className="job-details text-start">
                              <h3>{data.Slug}</h3>
                              <span className="company-neme">{data.Name}</span>
                              <div className="tags">
                                <span><i className="lni-map-marker"></i>{data.LocationName}</span>
                                <span><i className="lni-user"></i>John Smith</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                            <div className="tag-type">
                              <span className="heart-icon">
                                <i className="lni-heart"></i>
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
            <div className="col-lg-12 col-md-12 col-xs-12">

              <ul className="pagination">
                <li className="active"><NavLink to="/" className="btn-prev" ><i className="lni-angle-left"></i> prev</NavLink></li>
                <li><NavLink to="/">1</NavLink></li>
                <li><NavLink to="/">2</NavLink></li>
                <li><NavLink to="/">3</NavLink></li>
                <li><NavLink to="/">4</NavLink></li>
                <li><NavLink to="/">5</NavLink></li>
                <li className="active"><NavLink to="/" className="btn-next">Next <i className="lni-angle-right"></i></NavLink></li>
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