import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { EmpDashboardApi } from '../../Api/LoginApi';


const About = () => {
    const navigate = useNavigate();
    const [postedJob, setPostedJob] = useState("")
    const [allCompany, setAllCompany] = useState("")

    useEffect(() => {
        EmpDashboardData()
    }, [])

    const EmpDashboardData = async () => {
        const data = await EmpDashboardApi(navigate)
        console.log(data)
        setPostedJob(data.PostedJobs)
        setAllCompany(data.AllCompanies)
    }

    return (
        <>
            <Header />
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>About</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="about-content text-start">
                                <h3>About Job Career</h3>
                                <p>A job career is more than just a series of paychecks—it's a path toward personal growth, skill development, and long-term achievement. Whether you're just starting or advancing in your field, a career reflects your journey through learning, contributing, and evolving in your profession.</p>
                                <p>Choosing the right career helps you align your passions with your strengths, offering purpose and direction in your work life. With dedication and continuous learning, a job can become a rewarding career filled with opportunities, challenges, and accomplishments.</p>
                                {/* <NavLink to="/" className="btn btn-common">Learn More</NavLink> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <img className="img-fluid float-right" src="assets/img/about/img1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>



            <section id="counter" className="section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            {/* <div className="counter-box">
                                <div className="icon"><i className="lni-pencil-alt"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">900</span></h3>
                                    <p>Resumes</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="counter-box">
                                <div className="icon"><i className="lni-home"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">{postedJob}</span></h3>
                                    <p>Jobs Posted</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="counter-box">
                                <div className="icon"><i className="lni-briefcase"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">{allCompany}</span></h3>
                                    <p>All Companies</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            {/* <div className="counter-box">
                                <div className="icon"><i className="lni-save"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">1200</span></h3>
                                    <p>Applications</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

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
                                <p>Once you find the right job, apply with just a few clicks. Submit your resume, cover letter, or portfolio (if required), and track your application status in your dashboard.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonial" className="section bg-gray">
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
                                                <h2><NavLink to="/">Jessica</NavLink></h2>
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
                                                <h2><NavLink to="/">John Doe</NavLink></h2>
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
                                                <h2><NavLink to="/">Helen</NavLink></h2>
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

            <Footer />




        </>
    )
}

export default About