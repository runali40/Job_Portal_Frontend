import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const Blog = () => {
  return (
    <>
    <Header/>
        <div className="page-header">
      <div className="container">
        <div className="row">         
          <div className="col-lg-12">
            <div className="inner-header">
              <h3>Blog</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="content">
      <div className="container">
        <div className="row">
      
          <aside id="sidebar" className="col-lg-4 col-md-12 col-xs-12">
        
            <div className="widget text-start">
              <h5 className="widget-title">Search This Site</h5>
              <div className="widget-search widget-box">
                <form action="#">
                  <input className="form-control search" type="search" placeholder="Enter your keyword" />
                  <button className="search-btn" type="submit"><i className="lni-search"></i></button>
                </form>
              </div>
            </div>

        
            <div className="widget text-start">
              <h5 className="widget-title">Categories</h5>
              <div className="widget-categories widget-box">
                <ul className="cat-list">
                  <li>
                    <NavLink to="#">Announcement <span className="num-posts">(4)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">Indeed Events <span className="num-posts">(2)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">Tips & Tricks <span className="num-posts">(3)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">Experiences <span className="num-posts">(5)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">Case Studies <span className="num-posts">(6)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">Labor Market News <span className="num-posts">(9)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">HR Best Practices <span className="num-posts">(17)</span></NavLink>                   
                  </li>
                </ul>
              </div>
            </div>

        
            <div className="widget text-start">
              <h5 className="widget-title">Recent Post</h5>
              <div className="widget-popular-posts widget-box">
                <ul className="posts-list">
                  <li>
                    <div className="widget-content">
                      <NavLink to="#">Tips to write an impressive resume online for beginner</NavLink>
                      <span><i className="lni-calendar"></i> 25 March, 2020</span>
                    </div>
                    <div className="clearfix"></div>
                  </li>
                  <li>
                    <div className="widget-content">
                      <NavLink to="#">The sceret to pitching for new business</NavLink>
                      <span><i className="lni-calendar"></i> 25 March, 2020</span>
                    </div>
                    <div className="clearfix"></div>
                  </li>
                  <li>
                    <div className="widget-content">
                      <NavLink to="#">7 things you should never say to your boss</NavLink>
                      <span><i className="lni-calendar"></i> 25 March, 2020</span>
                    </div>
                    <div className="clearfix"></div>
                  </li>
                </ul>
              </div>
            </div>

    
            <div className="widget text-start">
              <h5 className="widget-title">Tags</h5>
              <div className="tag widget-box">
                <NavLink to="#"> Jobpress</NavLink>
                <NavLink to="#"> Recruiter</NavLink>
                <NavLink to="#"> Interview</NavLink> 
                <NavLink to="#"> Employee</NavLink>                                 
                <NavLink to="#"> Labor</NavLink>
                <NavLink to="#"> HR</NavLink>
                <NavLink to="#"> Salary</NavLink>
                <NavLink to="#"> Employer</NavLink>
              </div>
            </div> 

            <div className="widget text-start">
              <h5 className="widget-title">Archives</h5>
              <div className="widget-archives widget-box">
                <ul className="cat-list">
                  <li>
                    <NavLink to="#">October 2016 <span className="num-posts">(29)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">September 2016 <span className="num-posts">(34)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">August 2016 <span className="num-posts">(23)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">July 2016 <span className="num-posts">(38)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">June 2016 <span className="num-posts">(16)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">May 2016 <span className="num-posts">(14)</span></NavLink>                    
                  </li>
                  <li>
                    <NavLink to="#">April 2016 <span className="num-posts">(17)</span></NavLink>                   
                  </li>
                </ul>
              </div>
            </div>
          </aside>
    
          <div className="col-lg-8 col-md-12 col-xs-12">    
         
            <div className="blog-post text-start">
            
              <div className="post-thumb">
                <NavLink to="#"><img className="img-fulid" src="assets/img/blog/blog1.jpg" alt=""/></NavLink>
                <div className="hover-wrap">
                </div>
              </div>

              <div className="post-content">                     
                <h3 className="post-title"><NavLink to="#">Let's explore 5 cool new features in JobBoard theme</NavLink></h3>
                <div className="meta">                    
                  <span className="meta-part"><NavLink to="#"><i className="lni-user"></i> By Admin</NavLink></span>
                  <span className="meta-part"><i className="lni-calendar"></i><NavLink to="#"> 20.02.2020</NavLink></span>
                  <span className="meta-part"><NavLink to="#"><i className="lni-comments-alt"></i> 5Comments</NavLink></span>                    
                </div>
                <p>Fusce fermentum ipsum mauris, rutrum ultrices ligula sodales et. Maecenas pellentesque aliquet arcu, vel elementum magna facilisis vitae. Nam in cursus lorem. Donec ac tellus nisl. Sed volutpat quis orci nec placerat. Fusec ex magna, congue sed vulpu-tate rhoncus, laoreet nec sapien.</p>
                <NavLink to="#" className="btn btn-common">Read More</NavLink>
              </div>
            

            </div>

            <div className="blog-post text-start">
          
              <div className="post-thumb">
                <NavLink to="#"><img className="img-fulid" src="assets/img/blog/blog2.jpg" alt=""/></NavLink>
                <div className="hover-wrap">
                </div>
              </div>
           

           
              <div className="post-content">                     
                <h3 className="post-title"><NavLink to="#">Employer branding: Get behind the wheel!</NavLink></h3>
                <div className="meta">                    
                  <span className="meta-part"><NavLink to="#"><i className="lni-user"></i> By Admin</NavLink></span>
                  <span className="meta-part"><i className="lni-calendar"></i><NavLink to="#"> 20.02.2020</NavLink></span>
                  <span className="meta-part"><NavLink to="#"><i className="lni-comments-alt"></i> 5Comments</NavLink></span>                    
                </div>
                <p>Fusce fermentum ipsum mauris, rutrum ultrices ligula sodales et. Maecenas pellentesque aliquet arcu, vel elementum magna facilisis vitae. Nam in cursus lorem. Donec ac tellus nisl. Sed volutpat quis orci nec placerat. Fusec ex magna, congue sed vulpu-tate rhoncus, laoreet nec sapien.</p>
                <NavLink to="#" className="btn btn-common">Read More</NavLink>
              </div>
           

            </div>

            <div className="blog-post text-start">
        
              <div className="post-thumb">
                <NavLink to="#"><img className="img-fulid" src="assets/img/blog/blog3.jpg" alt=""/></NavLink>
                <div className="hover-wrap">
                </div>
              </div>

              <div className="post-content">                     
                <h3 className="post-title"><NavLink to="#">How to convince recruiters and get your dream job</NavLink></h3>
                <div className="meta">                    
                  <span className="meta-part"><NavLink to="#"><i className="lni-user"></i> By Admin</NavLink></span>
                  <span className="meta-part"><i className="lni-calendar"></i><NavLink to="#"> 20.02.2020</NavLink></span>
                  <span className="meta-part"><NavLink to="#"><i className="lni-comments-alt"></i> 5Comments</NavLink></span>                    
                </div>
                <p>Fusce fermentum ipsum mauris, rutrum ultrices ligula sodales et. Maecenas pellentesque aliquet arcu, vel elementum magna facilisis vitae. Nam in cursus lorem. Donec ac tellus nisl. Sed volutpat quis orci nec placerat. Fusec ex magna, congue sed vulpu-tate rhoncus, laoreet nec sapien.</p>
                <NavLink to="#" className="btn btn-common">Read More</NavLink>
              </div>
       

            </div>
                

       
            <ul className="pagination">              
              <li className="active"><NavLink to="#" className="btn-prev" ><i className="lni-angle-left"></i> prev</NavLink></li>
              <li><NavLink to="#">1</NavLink></li>
              <li><NavLink to="#">2</NavLink></li>
              <li><NavLink to="#">3</NavLink></li>
              <li><NavLink to="#">4</NavLink></li>
              <li><NavLink to="#">5</NavLink></li>
              <li className="active"><NavLink to="#" className="btn-next">Next <i className="lni-angle-right"></i></NavLink></li>
            </ul>
          
          </div>
       
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog