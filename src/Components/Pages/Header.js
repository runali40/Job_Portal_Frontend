import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
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

    const location = useLocation();

    // Helper function to check active dropdown
    const isActivePath = (paths) => {
        return paths.some((path) =>
            location.pathname.startsWith(path)
        );
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

                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                    <div className="container">

                        {/* Logo */}
                        <NavLink to="/" className="navbar-brand">
                            <img src="/assets/img/logo.png" alt="logo" height="40" />
                        </NavLink>

                        {/* Toggle Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#main-navbar"
                            aria-controls="main-navbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="main-navbar">
                            <ul className="navbar-nav mr-auto w-100 justify-content-end">

                                {/* Home */}
                                <li className="nav-item text-start ml-3">
                                    <NavLink
                                        to="/home"
                                        className={({ isActive }) =>
                                            isActive ? "nav-link active" : "nav-link"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                {/* Pages Dropdown */}
                                <li
                                    className={`nav-item dropdown text-start ml-3 ml-lg-0 ${isActivePath([
                                        "/about",
                                        "/jobPage",
                                        "/resumePage",
                                        "/privacyPolicy",
                                        "/pricing",
                                    ])
                                        ? "active"
                                        : ""
                                        }`}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${isActivePath([
                                            "/about",
                                            "/jobPage",
                                            "/resumePage",
                                            "/privacyPolicy",
                                            "/pricing",
                                        ])
                                            ? "active"
                                            : ""
                                            }`}
                                        href="#!"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Pages
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink
                                                to="/about"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "dropdown-item active"
                                                        : "dropdown-item"
                                                }
                                            >
                                                About
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to="/jobPage"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "dropdown-item active"
                                                        : "dropdown-item"
                                                }
                                            >
                                                Job Page
                                            </NavLink>
                                        </li>

                                        {RoleName === "Candidate" && (
                                            <li>
                                                <NavLink
                                                    to="/resumePage"
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "dropdown-item active"
                                                            : "dropdown-item"
                                                    }
                                                >
                                                    Resume Page
                                                </NavLink>
                                            </li>
                                        )}

                                        <li>
                                            <NavLink
                                                to="/privacyPolicy"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "dropdown-item active"
                                                        : "dropdown-item"
                                                }
                                            >
                                                Privacy Policy
                                            </NavLink>
                                        </li>

                                        {/* <li>
                                            <NavLink
                                                to="/pricing"
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "dropdown-item active"
                                                        : "dropdown-item"
                                                }
                                            >
                                                Pricing
                                            </NavLink>
                                        </li> */}
                                    </ul>
                                </li>

                                {/* Candidate Menu */}
                                {RoleName === "Candidate" && (
                                    <>
                                        <li
                                            className={`nav-item dropdown text-start ml-3 ml-lg-0 ${isActivePath([
                                                "/browseJobs",
                                                "/browseCategories",
                                                "/addResume",
                                                "/manageResume",
                                                "/jobAlerts",
                                            ])
                                                ? "active"
                                                : ""
                                                }`}
                                        >
                                            <a
                                                className={`nav-link dropdown-toggle ${isActivePath([
                                                    "/browseJobs",
                                                    "/browseCategories",
                                                    "/addResume",
                                                    "/manageResume",
                                                    "/jobAlerts",
                                                ])
                                                    ? "active"
                                                    : ""
                                                    }`}
                                                href="#!"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                Candidates
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/browseJobs" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Browse Jobs
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/browseCategories" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Browse Categories
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/addResume" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Add Resume
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/manageResume" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Manage Resumes
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/jobAlerts" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Job Alerts
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item text-start ml-3 ml-lg-0">
                                            <NavLink
                                                to="/uploadCv"
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                            >
                                                Upload CV
                                            </NavLink>
                                        </li>
                                    </>
                                )}

                                {/* Employer Menu */}
                                {RoleName === "Employer" && (
                                    <>
                                        <li
                                            className={`nav-item dropdown text-start ml-3 ml-lg-0 ${isActivePath([
                                                "/postJob",
                                                "/manageJobs",
                                                "/manageApplications",
                                                "/browseResumes",
                                            ])
                                                ? "active"
                                                : ""
                                                }`}
                                        >
                                            <a
                                                className={`nav-link dropdown-toggle ${isActivePath([
                                                    "/postJob",
                                                    "/manageJobs",
                                                    "/manageApplications",
                                                    "/browseResumes",
                                                ])
                                                    ? "active"
                                                    : ""
                                                    }`}
                                                href="#!"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                            >
                                                Employers
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to="/postJob" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Add Job
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/manageJobs" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Manage Jobs
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/manageApplications" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Manage Applications
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/browseResumes" className={({ isActive }) => isActive ? "dropdown-item active" : "dropdown-item"}>
                                                        Browse Resumes
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="button-group text-start ml-3 ml-lg-0">
                                            <NavLink to="/postJob" className="button btn btn-common">
                                                Post a Job
                                            </NavLink>
                                        </li>
                                    </>
                                )}

                                <li className="nav-item position-relative ms-lg-3 text-start ml-3 ml-lg-3">
                                    <MdNotifications size={22} color="#000" className='mt-lg-3 mt-3' />
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2"
                                        style={{ fontSize: "10px" }}
                                    >
                                        {RoleName === "Candidate" ? jobAlertCount : appliedCandidateCount}
                                    </span>
                                </li>
                                {/* Logout */}
                                <li className="nav-item text-start ml-3 ml-lg-3 ml-md-0">
                                    {/* <button className="btn btn-outline-danger btn-sm" onClick={LogOutButton}>
                                                        Sign Out
                                                    </button> */}
                                    <div className="nav-link" onClick={LogOutButton} style={{ cursor: "pointer" }}>Sign Out</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header