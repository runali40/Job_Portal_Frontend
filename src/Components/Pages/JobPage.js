import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const JobPage = () => {
  return (
   <>
<Header/>


    <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Find Job</h3>
            </div>
            <div className="job-search-form">
              <form>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-xs-12">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Job Title or Company Name"/>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-5 col-xs-12">
                    <div className="form-group">
                      <div className="search-category-container">
                        <label className="styled-select">
                          <select>
                            <option value="none">Locations</option>
                            <option value="none">New York</option>
                            <option value="none">California</option>
                            <option value="none">Washington</option>
                            <option value="none">Birmingham</option>
                            <option value="none">Chicago</option>
                            <option value="none">Phoenix</option>
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
                          <select>
                            <option>All Categories</option>
                            <option>Finance</option>
                            <option>IT & Engineering</option>
                            <option>Education/Training</option>
                            <option>Art/Design</option>
                            <option>Sale/Markting</option>
                            <option>Healthcare</option>
                            <option>Science</option>                              
                            <option>Food Services</option>
                          </select>
                        </label>
                      </div>
                      <i className="lni-layers"></i>
                    </div>
                  </div>
                  <div className="col-lg-1 col-md-2 col-xs-12">
                    <button type="submit" className="button"><i className="lni-search"></i></button>
                  </div>
                </div>
              </form>
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
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img1.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Software Engineer</h3>
                    <span className="company-neme">MizTech</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img2.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Graphic Designer</h3>
                    <span className="company-neme">Hunter Inc.</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="part-time">Part Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img3.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Managing Director</h3>
                    <span className="company-neme">MagNews</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="part-time">Part Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img4.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Software Engineer</h3>
                    <span className="company-neme">AmazeSoft</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img5.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Graphic Designer</h3>
                    <span className="company-neme">Bingo</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="full-time">Full Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="job-details.html">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="job-company-logo">
                    <img src="assets/img/features/img6.png" alt=""/>
                  </div>
                  <div className="job-details text-start">
                    <h3>Managing Director</h3>
                    <span className="company-neme">MagNews</span>
                    <div className="tags">  
                      <span><i className="lni-map-marker"></i> New York</span>  
                      <span><i className="lni-user"></i>John Smith</span>   
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                  <div className="tag-type">
                    <sapn className="heart-icon">
                      <i className="lni-heart"></i>
                    </sapn>
                    <span className="part-time">Part Time</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-12 text-center mt-4">
            <NavLink to="job-page.html" className="btn btn-common">Browse All Jobs</NavLink>
          </div>
        </div>
      </div>
    </section>

<Footer/>
   </>
  )
}

export default JobPage