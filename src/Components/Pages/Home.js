import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { MdNotifications } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom'
import { GetCategoryApi, GetCompanyNameApi, GetJobTitleApi, GetLocationApi, JobSearchApi } from '../../Api/HomeApi'
import {
    FaHome,
    FaGlobe,
    FaBook,
    FaDesktop,
    FaPaintBrush,
    FaHeart,
    FaFlask,
    FaTrophy,
    FaBell
} from 'react-icons/fa';

import { GetFeaturedApi } from '../../Api/EmployerApi/FeaturedApi';
import { BookmarkedJobApi } from '../../Api/CandidateApi/BookmarkedJobApi';
import Cookies from 'js-cookie';
import { getAllJobAlertApi, GetCandidateAlertCount } from '../../Api/CandidateApi/JobAlertApi';
import { GetNotificationCountApi } from '../../Api/EmployerApi/NotificationApi';

const Home = () => {
    const navigate = useNavigate();
    const RoleName = sessionStorage.getItem("rolename")
    const [location, setLocation] = useState("")
    const [allLocation, setAllLocation] = useState([])
    const [category, setCategory] = useState("")
    const [allCategory, setAllCategory] = useState([])
    const [allFeatures, setAllFeatures] = useState([])
    const [companyName, setCompanyName] = useState("")
    const [allCompanyName, setAllCompanyName] = useState([])
    const [jobTitle, setJobTitle] = useState("")
    const [allJobTitle, setAllJobTitle] = useState([])
    const [jobAlertCount, setJobAlertCount] = useState("")
    const [appliedCandidateCount, setAppliedCandidateCount] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                await GetLocationData();  // waits fully
                await GetCategoryData();  // uses updated token
                await GetCompanyNameData();
                await GetJobTitleData();
                await GetFeaturesData();
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

    const GetLocationData = async () => {
        const data = await GetLocationApi(navigate);
        setAllLocation(data);
    };

    const GetCategoryData = async () => {
        const data = await GetCategoryApi(navigate);
        setAllCategory(data);
    };

    const GetCompanyNameData = async () => {
        const data = await GetCompanyNameApi(navigate);
        setAllCompanyName(data);
    };

    const GetJobTitleData = async () => {
        const data = await GetJobTitleApi(navigate);
        setAllJobTitle(data);
    };

    const GetJobAlertCount = async () => {
        const data = await GetCandidateAlertCount(navigate);
        setJobAlertCount(data.Alertcount);
    };

    const GetAppliedCandidateCountData = async () => {
        const data = await GetNotificationCountApi(navigate);
        console.log(data.NotificationCount, "count data");
        setAppliedCandidateCount(data.NotificationCount)
    }

    const categoryIcons = {
        'Finance': <FaHome />,
        'Sale/Markting': <FaGlobe />,
        'Education/Training': <FaBook />,
        'Technologies': <FaDesktop />,
        'Art/Design': <FaPaintBrush />,
        'Healthcare': <FaHeart />,
        'Science': <FaFlask />,
        'Food Services': <FaTrophy />
    };

    const GetFeaturesData = async () => {
        const data = await GetFeaturedApi(navigate);
        console.log(data, "get featured data");
        setAllFeatures(data)
    }

    const GetBrowseData = (id) => {
        console.log("30", id)
        navigate("/jobDetails", {
            state: { id },
        });
    };

    const JobSearchData = async () => {
        const data = await JobSearchApi(location, category, companyName, jobTitle, navigate);
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

    const LogOutButton = () => {
        localStorage.removeItem("sessionid");
        // localStorage.removeItem("UserCredential");
        Cookies.remove("UserCredential", { path: '/' });
        Cookies.remove("UserCredential")
        navigate("/")
    }

    return (
        <>
            <header id="home" className="hero-area">

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
                                                    <NavLink className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                                    {/* <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Sign In</NavLink>
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
                <div className="container">
                    <div className="row space-100 justify-content-center">
                        <div className="col-lg-10 col-md-12 col-xs-12">
                            <div className="contents">
                                <h2 className="head-title">Find the job that fits your life</h2>
                                <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, <br /> id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
                                <div className="job-search-form">
                                    <div>
                                        <div className="row">
                                            {/* <div className="col-lg-5 col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                                                </div>
                                            </div> */}
                                            <div className="col-lg-3 col-md-6 col-xs-12">
                                                <div className="form-group">
                                                    <div className="search-category-container">
                                                        <label className="styled-select">

                                                            <select value={companyName} onChange={(e) => setCompanyName(e.target.value)}>
                                                                <option value="" disabled hidden>Select Company Name</option>
                                                                {allCompanyName.map((data) => (
                                                                    <option key={data.Name} value={data.Name}>
                                                                        {data.Name}
                                                                    </option>
                                                                ))}
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

                                                            <select value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
                                                                <option value="" disabled hidden>Select Job Title</option>
                                                                {allJobTitle.map((data) => (
                                                                    <option key={data.Slug} value={data.Slug}>
                                                                        {data.Slug}
                                                                    </option>
                                                                ))}
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
                                            <div className="col-lg-2 col-md-6 col-xs-12">
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
                                            <div className="col-lg-1 col-md-6 col-xs-12">
                                                <button type="submit" className="button" onClick={JobSearchData}><i className="lni-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="category section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Browse Categories</h2>
                        <p>Most popular categories of portal, sorted by popularity</p>
                    </div>
                    <div className="row">
                        {allCategory.map((data) => {
                            const Icon = categoryIcons[data.CategoryName] || <FaGlobe />; // Default fallback icon

                            return (
                                <div className="col-lg-3 col-md-6 col-xs-12 f-category" key={data.CategoryId}>
                                    <NavLink to="/browseJobs">
                                        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }} className='icon bg-color-1'>{Icon}</div>
                                        <h3>{data.CategoryName}</h3>
                                        <p>{data.TotalJobs} jobs</p>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

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

            <div id="browse-jobs" className="section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="text-wrapper text-start">
                                <div>
                                    <h3>7,000+ Browse Jobs</h3>
                                    <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                                    <NavLink className="btn btn-common" to="#">Search jobs</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="img-thumb">
                                <img className="img-fluid" src="assets/img/search.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="how-it-works section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How It Works?</h2>
                        <p> Follow these simple steps to start your career journey and land the right job faster.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process">
                                <span className="process-icon">
                                    <i className="lni-user"></i>
                                </span>
                                <h4>Create an Account</h4>
                                <p>Sign up and create your profile in just a few easy steps. Provide your basic information, showcase your skills, and get ready to explore career opportunities that match your strengths.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process step-2">
                                <span className="process-icon">
                                    <i className="lni-search"></i>
                                </span>
                                <h4>Search Jobs</h4>
                                <p>Browse through a wide variety of job listings that fit your profile. Use filters to search by industry, location, experience level, and more—helping you find roles that suit your career goals.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process step-3">
                                <span className="process-icon">
                                    <i className="lni-cup"></i>
                                </span>
                                <h4>Apply</h4>
                                <p>Once you find the right job, apply with just a few clicks. Submit your resume, cover letter, or portfolio (if required), and track your application status in your dashboard.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="latest-jobs" className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Latest Jobs</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-1.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">UX Designer</NavLink></h3>
                                    <p className="brand">MagNews</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="full-time">Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-2.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">UI Designer</NavLink></h3>
                                    <p className="brand">Hunter Inc.</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="part-time">Part Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-3.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">Web Developer</NavLink></h3>
                                    <p className="brand">MagNews</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="full-time">Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-4.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">UX Designer</NavLink></h3>
                                    <p className="brand">AmazeSoft</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="full-time">Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-2.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">Digital Marketer</NavLink></h3>
                                    <p className="brand">Bingo</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="part-time">Part Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="jobs-latest">
                                <div className="img-thumb">
                                    <img src="assets/img/features/img-1.jpg" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3><NavLink to="/jobDetails">Web Developer</NavLink></h3>
                                    <p className="brand">MagNews</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> New York</span>
                                        <span><i className="lni-user"></i>  John Smith</span>
                                    </div>
                                    <div className="tag mb-3"><i className="lni-tag"></i> #Html #Css #PHP</div>
                                    <span className="full-time">Full Time</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <NavLink to="/jobPage" className="btn btn-common">Browse All Jobs</NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Clients Review</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div id="testimonials" className="touch-slider owl-carousel">
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="assets/img/testimonial/img1.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                                            <div className="author-info">
                                                <h2><NavLink to="#">Jessica</NavLink></h2>
                                                <span>Senior Accountant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="assets/img/testimonial/img2.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                                            <div className="author-info">
                                                <h2><NavLink to="#">John Doe</NavLink></h2>
                                                <span>Project Menager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="assets/img/testimonial/img3.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                                            <div className="author-info">
                                                <h2><NavLink to="#">Helen</NavLink></h2>
                                                <span>Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="pricing" className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Pricing Plan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
                    </div>

                    <div className="row pricing-tables">
                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className="pricing-table border-color-defult">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-rocket"></i>
                                    </div>
                                    <h2>Professional</h2>
                                    <ul>
                                        <li>Post 1 Job</li>
                                        <li>No Featured Job</li>
                                        <li>Edit Your Job Listing</li>
                                        <li>Manage Application</li>
                                        <li>30-day Expired</li>
                                    </ul>
                                    <div className="price"><span>$</span>0<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <NavLink to="#" className="btn btn-border">Get Started</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className="pricing-table pricing-active border-color-red">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-drop"></i>
                                    </div>
                                    <h2>Advance</h2>
                                    <ul>
                                        <li>Post 1 Job</li>
                                        <li>No Featured Job</li>
                                        <li>Edit Your Job Listing</li>
                                        <li>Manage Application</li>
                                        <li>30-day Expired</li>
                                    </ul>
                                    <div className="price"><span>$</span>20<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <NavLink to="#" className="btn btn-border">Get Started</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-xs-12">
                            <div className="pricing-table border-color-green">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-briefcase"></i>
                                    </div>
                                    <h2>Premium</h2>
                                    <ul>
                                        <li>Post 1 Job</li>
                                        <li>No Featured Job</li>
                                        <li>Edit Your Job Listing</li>
                                        <li>Manage Application</li>
                                        <li>30-day Expired</li>
                                    </ul>
                                    <div className="price"><span>$</span>40<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <NavLink to="#" className="btn btn-border">Get Started</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section id="blog" className="section">

                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Blog Post</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <NavLink to="/blog">
                                        <img src="assets/img/blog/img1.jpg" alt="" />
                                    </NavLink>
                                </div>
                                <div className="blog-item-text text-start">
                                    <h3><NavLink to="/blog">Tips to write an impressive resume online for beginner</NavLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                                </div>
                                <NavLink className="readmore" to="#">Read More</NavLink>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <NavLink to="/blog">
                                        <img src="assets/img/blog/img2.jpg" alt="" />
                                    </NavLink>
                                </div>
                                <div className="blog-item-text text-start">
                                    <h3><NavLink to="/blog">Let's explore 5 cool new features in JobBoard theme</NavLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                                </div>
                                <NavLink className="readmore" to="#">Read More</NavLink>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <NavLink to="/blog">
                                        <img src="assets/img/blog/img3.jpg" alt="" />
                                    </NavLink>
                                </div>
                                <div className="blog-item-text text-start">
                                    <h3><NavLink to="/blog">How to convince recruiters and get your dream job</NavLink></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                                </div>
                                <NavLink className="readmore" to="#">Read More</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



            <section id="download" className="section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-xs-12">
                            <div className="download-wrapper text-start">
                                <div>
                                    <div className="download-text">
                                        <h4>Download Our Best Apps</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et metus effici turac fringilla lorem facilisis, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="app-button">
                                        <NavLink to="#" className="btn btn-border"><i className="lni-apple"></i>Download <br /> <span>From App Store</span></NavLink>
                                        <NavLink to="#" className="btn btn-common btn-effect"><i className="lni-android"></i> Download <br /> <span>From Play Store</span></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-xs-12">
                            <div className="download-thumb">
                                <img className="img-fluid" src="assets/img/app.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* <NavLink to="#" className="back-to-top">
                <i className="lni-arrow-up"></i>
            </NavLink>


            <div id="preloader">
                <div className="loader" id="loader-1"></div>
            </div> */}



        </>
    )
}

export default Home