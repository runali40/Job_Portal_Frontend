import React from 'react'
import { NavLink } from 'react-router-dom'
const LeftSidebar = () => {
    const RoleName = sessionStorage.getItem("rolename")
    return (
        <>
            <div className="right-sideabr text-start">
                <h4>Manage Account</h4>
                <ul className="list-item">
                    <li><NavLink to="/resumePage">My Resume</NavLink></li>
                    {RoleName === "Candidate" &&
                        <>
                            <li><NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                            {/* <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li> */}
                        </>
                    }
                    {RoleName === "Employer" && (
                        <>
                            <li>
                                <NavLink to="/appliedCandidate">Applied Candidate</NavLink>
                            </li>
                            <li>
                                <NavLink to="/manageJobs">Manage Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/manageApplications">Manage Applications</NavLink>
                            </li>
                        </>
                    )}
                    {RoleName === "Candidate" &&
                        <>
                            <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                            <li><NavLink to="/changePassword">Change Password</NavLink></li>
                        </>
                    }
                    <li><NavLink to="/">Sign Out</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default LeftSidebar