import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    FaHome,
    FaGlobe,
    FaBook,
    FaDesktop,
    FaPaintBrush,
    FaHeart,
    FaFlask,
    FaTrophy,
} from 'react-icons/fa';
import { GetCategoryApi } from '../../../Api/HomeApi';

const BrowseCategories = () => {
    const navigate = useNavigate();
    const [allCategory, setAllCategory] = useState([])

    useEffect(() => {
        GetCategoryData();
    }, [])

    const GetCategoryData = async () => {
        const data = await GetCategoryApi(navigate);
        setAllCategory(data);
    };

    const categoryIcons = {
        'Finance': <FaHome />,
        'Sale/Markting': <FaGlobe />,
        'Education/Training': <FaBook />,
        'Technologies': <FaDesktop />,
        'Art/Design': <FaPaintBrush />,
        'Healthcare': <FaHeart />,
        'Science': <FaFlask />,
        'Food Services': <FaTrophy />
    };
    return (
        <>
            <Header />
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Categories</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="category section bg-gray">
                <div className="container">
                    <div className="row">
                        {allCategory.map((data) => {
                            const Icon = categoryIcons[data.CategoryName] || <FaGlobe />; // Default fallback icon

                            return (
                                <div className="col-lg-3 col-md-6 col-xs-12 f-category" key={data.CategoryId}>
                                    <NavLink to="/browseJobs">
                                        <div style={{ fontSize: '2.5rem', marginBottom: '10px' }} className='icon bg-color-1'>{Icon}</div>
                                        <h3>{data.CategoryName}</h3>
                                        <p>{data.TotalJobs} jobs</p>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="all-categories section">
                <div className="container">
                    <h2 className="categories-title text-start">Browse All Categories</h2>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <h3 className="cat-title text-start">Business <span>(33 Sub Categories)</span></h3>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Accounting & Finance</NavLink></li>
                                <li><NavLink to="/">Asset Management</NavLink></li>
                                <li><NavLink to="/">Capital Markets</NavLink></li>
                                <li><NavLink to="/">Commercial Banking</NavLink></li>
                                <li><NavLink to="/">Commodities</NavLink></li>
                                <li><NavLink to="/">Consultiong</NavLink></li>
                                <li><NavLink to="/">Corporate</NavLink></li>
                                <li><NavLink to="/">Credit</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Debt/Fixed Income</NavLink></li>
                                <li><NavLink to="/">Derivatives</NavLink></li>
                                <li><NavLink to="/">Equities</NavLink></li>
                                <li><NavLink to="/">FX & Money Markets</NavLink></li>
                                <li><NavLink to="/">Global Custody</NavLink></li>
                                <li><NavLink to="/">Covernment</NavLink></li>
                                <li><NavLink to="/">Graduates & Internships</NavLink></li>
                                <li><NavLink to="/">Hedge Funds</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Information Services</NavLink></li>
                                <li><NavLink to="/">Insurance</NavLink></li>
                                <li><NavLink to="/">Investment Consulting</NavLink></li>
                                <li><NavLink to="/">Investment Banking</NavLink></li>
                                <li><NavLink to="/">Islamic Finance</NavLink></li>
                                <li><NavLink to="/">Operations</NavLink></li>
                                <li><NavLink to="/">Private Banking</NavLink></li>
                                <li><NavLink to="/">Private Equity & Venture Capital</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Quantitative Analytics</NavLink></li>
                                <li><NavLink to="/">Real Estate</NavLink></li>
                                <li><NavLink to="/">Research</NavLink></li>
                                <li><NavLink to="/">Retail Banking</NavLink></li>
                                <li><NavLink to="/">Risk Management</NavLink></li>
                                <li><NavLink to="/">Trading</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3 className="cat-title text-start">Science <span>(34 Sub Categories)</span></h3>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Aeronautical Engineering</NavLink></li>
                                <li><NavLink to="/">Aerospace Engineering</NavLink></li>
                                <li><NavLink to="/">Algorthm</NavLink></li>
                                <li><NavLink to="/">Biology</NavLink></li>
                                <li><NavLink to="/">Broadcast Engineering</NavLink></li>
                                <li><NavLink to="/">Circuit Design</NavLink></li>
                                <li><NavLink to="/">Civil Engineering</NavLink></li>
                                <li><NavLink to="/">Clean Technology</NavLink></li>
                                <li><NavLink to="/">Construction Monitoring</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Climate Sciences</NavLink></li>
                                <li><NavLink to="/">Cryptography</NavLink></li>
                                <li><NavLink to="/">Data Mining</NavLink></li>
                                <li><NavLink to="/">Data Science</NavLink></li>
                                <li><NavLink to="/">Digital Design</NavLink></li>
                                <li><NavLink to="/">Drones</NavLink></li>
                                <li><NavLink to="/">Electrical Engineering</NavLink></li>
                                <li><NavLink to="/">Electronics</NavLink></li>
                                <li><NavLink to="/">Engineering</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Gelolgy</NavLink></li>
                                <li><NavLink to="/">Human Science</NavLink></li>
                                <li><NavLink to="/">Imaging</NavLink></li>
                                <li><NavLink to="/">Industrial Engineering</NavLink></li>
                                <li><NavLink to="/">Instrumentation</NavLink></li>
                                <li><NavLink to="/">Machine Learning</NavLink></li>
                                <li><NavLink to="/">Mathematics</NavLink></li>
                                <li><NavLink to="/">Machanical Engineering</NavLink></li>
                                <li><NavLink to="/">Medical</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Nanotechnology</NavLink></li>
                                <li><NavLink to="/">Natural Language</NavLink></li>
                                <li><NavLink to="/">Physics</NavLink></li>
                                <li><NavLink to="/">Quantum</NavLink></li>
                                <li><NavLink to="/">Remote Sensing</NavLink></li>
                                <li><NavLink to="/">Robotics</NavLink></li>
                                <li><NavLink to="/">Statistics</NavLink></li>
                                <li><NavLink to="/">Wireless</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <h3 className="cat-title text-start">Sales & Marketing <span>(21 Sub Categories)</span></h3>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Display Advertising</NavLink></li>
                                <li><NavLink to="/">Email Marketing</NavLink></li>
                                <li><NavLink to="/">Lead Generation</NavLink></li>
                                <li><NavLink to="/">Market &amp; Customer Research</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Marketing Strategy</NavLink></li>
                                <li><NavLink to="/">Public Relations</NavLink></li>
                                <li><NavLink to="/">Telemarketing &amp; Telesales</NavLink></li>
                                <li><NavLink to="/">Other - Sales &amp; Marketing</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">SEM - Search Engine Marketing</NavLink></li>
                                <li><NavLink to="/">SEO - Search Engine Optimization</NavLink></li>
                                <li><NavLink to="/">SMM - Social Media Marketing</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-12">
                            <ul className='text-start'>
                                <li><NavLink to="/">Climate Sciences</NavLink></li>
                                <li><NavLink to="/">Cryptography</NavLink></li>
                                <li><NavLink to="/">Data Mining</NavLink></li>
                                <li><NavLink to="/">Digital Design</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BrowseCategories