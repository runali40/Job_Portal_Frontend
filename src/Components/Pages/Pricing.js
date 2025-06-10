import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Pricing = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Pricing</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pricing" className="section bg-gray">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Pricing Plan</h2>
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
                                    <NavLink to="/" className="btn btn-border">Get Started</NavLink>
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
                                    <NavLink to="/" className="btn btn-border">Get Started</NavLink>
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
                                    <NavLink to="/" className="btn btn-border">Get Started</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Pricing