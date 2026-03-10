import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

const Pricing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const uId = location.state?.uId || 0;
    console.log(uId)
    const rId = location.state?.rId || 0;
    console.log(rId)
    const cId = location.state?.cId || 0;
    console.log(cId)
    const CreateOrderData = async (amount, duration) => {
        navigate('/createOrder', { state: { amount, duration, uId, rId, cId } });
    };

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
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="pricing-table border-color-defult">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-rocket"></i>
                                    </div>
                                    <h2>1 Month</h2>
                                    <ul>
                                        <li className='text-start'>📝 Post 1 Job</li>

                                        <li className='text-start'>🚫 No Featured Job</li>

                                        <li className='text-start'>✏️ Edit Job Listing</li>

                                        <li className='text-start'>📥 Manage Applications</li>

                                        <li className='text-start'>⏳ Listing Expires in 30 Days</li>

                                        <li className='text-start'>🛡️ Basic Support</li>

                                        <li className='text-start'>✅ Access to Employer Dashboard</li>
                                    </ul>
                                    <div className="price"><span>₹</span>1200<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <div className="btn btn-border" onClick={() => CreateOrderData(1,"1 Month")} >Get Started</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="pricing-table pricing-active border-color-red">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-drop"></i>
                                    </div>
                                    <h2>3 Months</h2>
                                    <ul>
                                        <li className='text-start'> 📝 Post 1 Job (every month)</li>

                                        <li className='text-start'>🚫 No Featured Job</li>

                                        <li className='text-start'>✏️ Edit Job Listings</li>

                                        <li className='text-start'>📥 Manage Applications</li>

                                        <li className='text-start'>⏳ Listings Expire in 30 Days (per job)</li>

                                        <li className='text-start'>📊 Basic Analytics</li>

                                        <li className='text-start'>🛡️ Priority Support</li>

                                        <li className='text-start'>✅ Access to Employer Dashboard</li>
                                    </ul>
                                    {/* <div className="price"><span>₹</span>2500<span>/Month</span></div> */}
                                <div className="price"><span>₹</span>850<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <div /* to="/paymentGateway" */ className="btn btn-border" onClick={() => CreateOrderData(4000)}/* onClick={() => handlePayment(1)} *//* onClick={()=>CreateOrderData(2500)} */>Get Started</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="pricing-table border-color-green">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-briefcase"></i>
                                    </div>
                                    <h2>6 Months</h2>
                                    <ul>
                                        <li className='text-start'>📝 Post 2 Jobs every 3 months</li>

                                        <li className='text-start'>🚫 No Featured Job</li>

                                        <li className='text-start'>✏️ Edit & Repost Jobs</li>

                                        <li className='text-start'>📥 Manage Applications</li>

                                        <li className='text-start'>⏳ Listings Valid for 30 Days</li>

                                        <li className='text-start'>📊 Advanced Analytics</li>

                                        <li className='text-start'>🛡️ Premium Support</li>

                                        <li className='text-start'>🔄 Resume Downloads (limited)</li>

                                        <li className='text-start'>✅ Dashboard + Alerts</li>
                                    </ul>
                                    {/* <div className="price"><span>₹</span>4000<span>/Month</span></div> */}
                                 <div className="price"><span>₹</span>700<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <div /* to="/paymentGateway" */ className="btn btn-border" onClick={() => CreateOrderData(1)}/* onClick={() => handlePayment(1)} *//* onClick={()=>CreateOrderData(4000)} */>Get Started</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="pricing-table border-color-green">
                                <div className="pricing-details">
                                    <div className="icon">
                                        <i className="lni-briefcase"></i>
                                    </div>
                                    <h2>1 Year</h2>
                                    <ul>
                                        <li className='text-start'>📝 Post Up to 10 Jobs/year</li>

                                        <li className='text-start'>🚫 No Featured Job</li>

                                        <li className='text-start'>✏️ Full Job Listing Control</li>

                                        <li className='text-start'>📥 Unlimited Application Access</li>

                                        <li className='text-start'>⏳ Listings Valid for 30 Days</li>

                                        <li className='text-start'>📊 Full Analytics Suite</li>

                                        <li className='text-start'>🛡️ Premium Support</li>

                                        <li className='text-start'>🔄 Resume Downloads (unlimited)</li>

                                        <li className='text-start'>📅 Interview Scheduling Tool</li>

                                        <li className='text-start'>✅ Full Dashboard + Email Alerts</li>
                                    </ul>
                                    {/* <div className="price"><span>₹</span>6000<span>/Month</span></div> */}
                                 <div className="price"><span>₹</span>500<span>/Month</span></div>
                                </div>
                                <div className="plan-button">
                                    <div /* to="/paymentGateway" */ className="btn btn-border" onClick={() => CreateOrderData(1)} /* onClick={() => handlePayment(1)} *//* onClick={()=>CreateOrderData(6000)} */>Get Started</div>
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