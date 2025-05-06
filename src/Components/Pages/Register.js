import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Register = () => {
    return (
        <>
           <Header/>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Create Your account</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="content" className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6 col-xs-12">
                            <div className="page-login-form box">
                                <h3>
                                    Create Your account
                                </h3>
                                <form className="login-form">
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" className="form-control" name="name" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-envelope"></i>
                                            <input type="text" className="form-control" name="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock"></i>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-unlock"></i>
                                            <input type="password" className="form-control" placeholder="Retype Password" />
                                        </div>
                                    </div>
                                    <button className="btn btn-common log-btn mt-3">Register</button>
                                    <p className="text-center">Already have an account?<NavLink to="/login"> Sign In</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Footer/>
        </>
    )
}

export default Register