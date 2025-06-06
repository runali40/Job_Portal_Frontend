import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { MdNotifications } from 'react-icons/md';
import { GetNotificationCountApi } from '../../Api/EmployerApi/NotificationApi';
import { GetCandidateAlertCount } from '../../Api/CandidateApi/JobAlertApi';

const Header = () => {
    const RoleName = sessionStorage.getItem("rolename")
    const navigate = useNavigate();
    const [jobAlertCount, setJobAlertCount] = useState("")
    const [appliedCandidateCount, setAppliedCandidateCount] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                {
                    RoleName === "Candidate" ?
                        await GetJobAlertCount() :
                        await GetAppliedCandidateCountData()
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const GetJobAlertCount = async () => {
        const data = await GetCandidateAlertCount(navigate);
        setJobAlertCount(data.Alertcount);
    };

    const GetAppliedCandidateCountData = async () => {
        const data = await GetNotificationCountApi(navigate);
        console.log(data.NotificationCount, "count data");
        setAppliedCandidateCount(data.NotificationCount)
    }

    const LogOutButton = () => {
        localStorage.removeItem("sessionid");
        // localStorage.removeItem("UserCredential");
        Cookies.remove("UserCredential", { path: '/' });
        Cookies.remove("UserCredential")
        navigate("/")
    }

    return (
        <>
            {/* <header id="home" className="hero-area">

                <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                    <div className="container">
                        <div className="theme-header clearfix">

                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="lni-menu"></span>
                                    <span className="lni-menu"></span>
                                    <span className="lni-menu"></span>
                                </button>
                                <a href="index-2.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
                            </div>
                            <div className="collapse navbar-collapse" id="main-navbar">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index-2.html">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="about.html">About</a></li>
                                            <li><a className="dropdown-item" href="job-page.html">Job Page</a></li>
                                            <li><a className="dropdown-item" href="job-details.html">Job Details</a></li>
                                            <li><a className="dropdown-item" href="resume.html">Resume Page</a></li>
                                            <li><a className="dropdown-item" href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                                            <li><a className="dropdown-item" href="pricing.html">Pricing Tables</a></li>
                                            <li><a className="dropdown-item" href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Candidates
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="browse-jobs.html">Browse Jobs</a></li>
                                            <li><a className="dropdown-item" href="browse-categories.html">Browse Categories</a></li>
                                            <li><a className="dropdown-item" href="add-resume.html">Add Resume</a></li>
                                            <li><a className="dropdown-item" href="manage-resumes.html">Manage Resumes</a></li>
                                            <li><a className="dropdown-item" href="job-alerts.html">Job Alerts</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Employers
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="post-job.html">Add Job</a></li>
                                            <li><a className="dropdown-item" href="manage-jobs.html">Manage Jobs</a></li>
                                            <li><a className="dropdown-item" href="manage-applications.html">Manage Applications</a></li>
                                            <li><a className="dropdown-item" href="browse-resumes.html">Browse Resumes</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="blog.html">Blog - Right Sidebar</a></li>
                                            <li><a className="dropdown-item" href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                                            <li><a className="dropdown-item" href="blog-full-width.html"> Blog full width</a></li>
                                            <li><a className="dropdown-item" href="single-post.html">Blog Single Post</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html">Sign In</a>
                                    </li>
                                    <li className="button-group">
                                        <a href="post-job.html" className="button btn btn-common">Post a Job</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
                </nav>
                <div className="container">
                    <div className="row space-100 justify-content-center">
                        <div className="col-lg-10 col-md-12 col-xs-12">
                            <div className="contents">
                                <h2 className="head-title">Find the job that fits your life</h2>
                                <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, <br /> id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
                                <div className="job-search-form">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-5 col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-xs-12">
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
                                            <div className="col-lg-3 col-md-6 col-xs-12">
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
                                            <div className="col-lg-1 col-md-6 col-xs-12">
                                                <button type="submit" className="button"><i className="lni-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}

            <header id="home" className="hero-area">
                <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
                    <div className="container">
                        <div className="theme-header clearfix">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="#main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="lni-menu"></span>
                                    <span className="lni-menu"></span>
                                    <span className="lni-menu"></span>
                                </button>
                                <NavLink to="/" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></NavLink>
                            </div>
                            <div className="collapse navbar-collapse" id="main-navbar">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/home">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to="/about">About</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/jobPage">Job Page</NavLink></li>
                                            {/* <li><NavLink className="dropdown-item" to="/jobDetails">Job Details</NavLink></li> */}
                                            <li><NavLink className="dropdown-item" to="/resumePage">Resume Page</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/privacyPolicy">Privacy Policy</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/pricing">Pricing Tables</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/contact">Contact</NavLink></li>
                                        </ul>
                                    </li>
                                    {
                                        RoleName === "Candidate" ?
                                            <>
                                                <li className="nav-item dropdown">
                                                    <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Candidates
                                                    </NavLink>
                                                    <ul className="dropdown-menu">
                                                        <li><NavLink className="dropdown-item" to="/browseJobs">Browse Jobs</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/browseCategories">Browse Categories</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/addResume">Add Resume</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/manageResume">Manage Resumes</NavLink></li>
                                                        <li><NavLink className="dropdown-item" to="/jobAlerts">Job Alerts</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/uploadCv">
                                                        Upload CV
                                                    </NavLink>
                                                </li>
                                            </>
                                            :
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Employers
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink className="dropdown-item" to="/postJob">Add Job</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to="/manageJobs">Manage Jobs</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to="/manageApplications">Manage Applications</NavLink></li>
                                                    <li><NavLink className="dropdown-item" to="/browseResumes">Browse Resumes</NavLink></li>
                                                </ul>
                                            </li>
                                    }
                                    {/* <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                        </NavLink>

                                    </li> */}
                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">
                                            Contact
                                        </NavLink>
                                    </li> */}

                                    {
                                        RoleName === "Employer" &&
                                        <li className="button-group">
                                            <NavLink to="/postJob" className="button btn btn-common">Post a Job</NavLink>
                                        </li>
                                    }
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <MdNotifications size={28} color="#000" className='mt-3' />

                                        <span style={{
                                            position: 'absolute',
                                            top: '2px',
                                            right: '-6px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '2px 6px',
                                            fontSize: '10px'
                                        }}>
                                            {
                                                RoleName === "Candidate" ? jobAlertCount : appliedCandidateCount
                                            }
                                        </span>

                                    </div>
                                    <li className="nav-item">
                                        <div className="nav-link" onClick={LogOutButton} style={{ cursor: "pointer" }}>Sign Out</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>
                </nav>
            </header>
        </>
    )
}

export default Header