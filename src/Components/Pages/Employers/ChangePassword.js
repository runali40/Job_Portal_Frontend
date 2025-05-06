import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { NavLink } from 'react-router-dom'

const ChangePassword = () => {
    return (
        <>
            <Header />
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Change Password</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="right-sideabr text-start">
                                <h4>Manage Account</h4>
                                <ul className="list-item">

                                    <li><NavLink to="/resume">My Resume</NavLink></li>
                                    <li><NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink></li>
                                    <li><NavLink to="/notifications">Notifications <span className="notinumber">2</span></NavLink></li>
                                    <li><NavLink to="/manageApplications">Manage Applications</NavLink></li>
                                    <li><NavLink to="/jobAlerts">Job Alerts</NavLink></li>
                                    <li><NavLink className="active" to="/changePassword">Change Password</NavLink></li>
                                    <li><NavLink to="/">Sign Out</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="job-alerts-item text-start">
                                <h3 className="alerts-title">Change Password</h3>
                                <form className="form">
                                    <div className="form-group is-empty">
                                        <label className="control-label">Old Password*</label>
                                        <input className="form-control" type="text" />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="form-group is-empty">
                                        <label className="control-label">New Password*</label>
                                        <input className="form-control" type="text" />
                                        <span className="material-input"></span>
                                    </div>
                                    <NavLink to="#" id="submit" className="btn btn-common">Save Change</NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChangePassword