import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'

const BrowseJobs = () => {
  return (
    <>
    <Header/>
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
                <input type="text" className="form-control" placeholder="Keyword: Name, Tag"/>
              </div>
              <div className="col-lg-5 col-md-5 col-xs-12">
                <input type="text" className="form-control" placeholder="Location: City, State, Zip"/>
              </div>
              <div className="col-lg-2 col-md-2 col-xs-12">
                <button type="submit" className="btn btn-common float-right">Filter</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <NavLink className="job-listings-featured" to="/jobDetails">
              <div className="row ">
                <div className="col-lg-6 col-md-6 col-xs-12 ">
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
            <NavLink className="job-listings-featured" to="/jobDetails">
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
            <NavLink className="job-listings-featured" to="/jobDetails">
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
            <NavLink className="job-listings-featured" to="/jobDetails">
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
            <NavLink className="job-listings-featured" to="/jobDetails">
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
            <NavLink className="job-listings-featured" to="/jobDetails">
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
<Footer/>
    </>
  )
}

export default BrowseJobs