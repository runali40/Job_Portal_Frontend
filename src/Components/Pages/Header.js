import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const RoleName = sessionStorage.getItem("rolename")
    return (
        <>
            <header id="home" className="hero-area">
                <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar navbar-light bg-light">
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
                                        <NavLink className="nav-link" to="/">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                            :
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Blog
                                        </NavLink>

                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/uploadCv">
                                            Upload CV
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Sign In</NavLink>
                                    </li>
                                    <li className="button-group">
                                        <NavLink to="/postJob" className="button btn btn-common">Post a Job</NavLink>
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