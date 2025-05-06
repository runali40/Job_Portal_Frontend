import React from 'react'
import { NavLink } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const About = () => {
    return (
        <>
 <Header/>


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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi, saepe hic esse maxime quasi, sapiente ex debitis quis dolorum unde, neque quibusdam eveniet nobis enim porro repudiandae nesciunt quidem.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus soluta adipisci beatae ullam quisquam, quia recusandae rem assumenda, praesentium porro sequi eaque doloremque tenetur incidunt officiis explicabo optio perferendis.</p>
                                <NavLink to="#" className="btn btn-common">Learn More</NavLink>
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
                            <div className="counter-box">
                                <div className="icon"><i className="lni-home"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">800</span></h3>
                                    <p>Jobs Posted</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="counter-box">
                                <div className="icon"><i className="lni-briefcase"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">80</span></h3>
                                    <p>All Companies</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="counter-box">
                                <div className="icon"><i className="lni-pencil-alt"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">900</span></h3>
                                    <p>Resumes</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <div className="counter-box">
                                <div className="icon"><i className="lni-save"></i></div>
                                <div className="fact-count">
                                    <h3><span className="counter">1200</span></h3>
                                    <p>Applications</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="how-it-works section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How It Works?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process">
                                <span className="process-icon">
                                    <i className="lni-user"></i>
                                </span>
                                <h4>Create an Account</h4>
                                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process step-2">
                                <span className="process-icon">
                                    <i className="lni-search"></i>
                                </span>
                                <h4>Search Jobs</h4>
                                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="work-process step-3">
                                <span className="process-icon">
                                    <i className="lni-cup"></i>
                                </span>
                                <h4>Apply</h4>
                                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
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
                                                <h2><NavLink to="#">Jessica</NavLink></h2>
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
                                                <h2><NavLink to="#">John Doe</NavLink></h2>
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
                                                <h2><NavLink to="#">Helen</NavLink></h2>
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

        <Footer/>

           


        </>
    )
}

export default About