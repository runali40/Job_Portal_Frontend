import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ForgotPasswordApi } from '../../../Api/LoginApi'


const ForgotPassword = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [emailId, setEmailId] = useState("")
    const [newPassword, setNewPassword] = useState("")
    // const [showPassword, setShowPassword] = useState(false);

    const ForgotPasswordData = async () => {
        const data = ForgotPasswordApi(username, emailId, newPassword, navigate)
        console.log(data)
        navigate("/")
    }

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Forgot Password</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                        </div>
                        <div className="col-md-8 col-sm-8 col-xs-12">
                            <div className="job-alerts-item text-start">
                                <h3 className="alerts-title">Forgot Password</h3>
                                <div className="form">
                                    <div className="form-group is-empty">
                                        <label className="control-label">Username*</label>
                                        <input className="form-control" type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="form-group is-empty">
                                        <label className="control-label">Email Address*</label>
                                        <input className="form-control" type="email" placeholder='Email Address' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="form-group is-empty">
                                        <label className="control-label">New Password*</label>
                                        <input className="form-control" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <button id="submit" className="btn btn-common" onClick={ForgotPasswordData}>Save Change</button>
                                    <p className="text-center"><NavLink to="/"> Back to Login</NavLink></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-12">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword