import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ForgotPasswordApi } from '../../../Api/LoginApi'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [emailId, setEmailId] = useState("")
    const [newPassword, setNewPassword] = useState("")
    // const [showPassword, setShowPassword] = useState(false);

    const ForgotPasswordData = async () => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (username.trim() === "") {
            toast.warning("Please enter username!");
            return;
        }

        if (emailId.trim() === "") {
            toast.warning("Please enter email!");
            return;
        }

        if (!emailPattern.test(emailId)) {
            toast.warning("Please enter valid email!");
            return;
        }

        if (newPassword.trim() === "") {
            toast.warning("Please enter new password!");
            return;
        }

        try {
            const data = await ForgotPasswordApi(username, emailId, newPassword, navigate);
            console.log(data);
            if (data) {
                navigate("/");
            }

        } catch (error) {
            console.log(error);

        }
    };

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <NavLink className="navbar-brand">
                                    <img src="/assets/img/logo.png" alt="logo" height="60" />
                                </NavLink>
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
                                        <label className="control-label">Username</label> <span className="text-danger">*</span>
                                        <input className="form-control" type="text" placeholder='Username' autoComplete="off"
                                            readOnly
                                            onFocus={(e) => e.target.removeAttribute('readonly')} value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="form-group is-empty">
                                        <label className="control-label">Email Address</label> <span className="text-danger">*</span>
                                        <input className="form-control" type="email" autoComplete="off"
                                            readOnly
                                            onFocus={(e) => e.target.removeAttribute('readonly')} placeholder='Email Address' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <div className="form-group is-empty">
                                        <label className="control-label">New Password</label> <span className="text-danger">*</span>
                                        <input className="form-control" type="password" autoComplete="off"
                                            readOnly
                                            onFocus={(e) => e.target.removeAttribute('readonly')} placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                        <span className="material-input"></span>
                                    </div>
                                    <button id="submit" className="btn btn-common" onClick={ForgotPasswordData}>Save</button>
                                    <p className="text-start mt-2"><NavLink to="/"> Back to Login</NavLink></p>
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