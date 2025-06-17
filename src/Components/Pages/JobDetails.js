import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { GetBrowseApi } from '../../Api/EmployerApi/EmployeerApi'
import { ApplyJobApi, DownloadResumeApi, GetResumeApi } from '../../Api/CandidateApi/AddResumeApi'
import { GetSimilarJobApi } from '../../Api/EmployerApi/FeaturedApi'

const JobDetails = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const { id } = location.state || {};
    console.log(location.state, "10")
    console.log("Received ID:", id);
    console.log(id, "14")
    // const [searchParams] = useSearchParams();
    // const jobId = searchParams.get("id");
    // console.log(jobId, "14")
    const [jobTitle, setJobTitle] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [locationName, setLocationName] = useState("")
    const [closingDate, setClosingDate] = useState("")
    const [postingDate, setPostingDate] = useState("")
    const [jobSkills, setJobSkills] = useState("")
    const [description, setDescription] = useState("")
    const [jobDetailId, setJobDetailId] = useState("")
    const [resumeUrl, setResumeUrl] = useState("")
    const [fileName, setFileName] = useState("")
    const [jobStatus, setJobStatus] = useState("")
    const [companyLogo, setCompanyLogo] = useState("")
    const [allSimilarJobs, setAllSimilarJobs] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                await GetJobDetails();  // waits fully
                await GetResumeData();  // uses updated token
                await SimilarJobs();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Updated jobStatus:", jobStatus);
        setJobStatus(jobStatus)
        console.log("Updated jobStatus:", jobStatus);
    }, [jobStatus]);

    const GetJobDetails = async () => {
        const data = await GetBrowseApi(id, navigate);
        setJobTitle(data.Slug);
        setCompanyName(data.Name);
        setClosingDate(data.ClosingDate);
        setJobSkills(data.Introduce);
        setDescription(data.Description);
        setLocationName(data.LocationName);
        setJobDetailId(data.Id);
        const status = data.Status;
        console.log("Setting jobStatus to:", status); // ✅ correct placement
        setJobStatus(status);
        setFileName(data.UFileName);
        setCompanyLogo(data.LOGOFile)
    };
    const GetResumeData = async () => {
        // const data = await GetResumeApi(jobDetailId, navigate);
        const data = await GetResumeApi(navigate);
        console.log(data);
        setResumeUrl(data.ResumeUrl)
        setFileName(data.UFileName)
    };

    const SimilarJobs = async () => {
        const data = await GetSimilarJobApi(navigate)
        console.log(data)
        setAllSimilarJobs(data)
    }

    const ApplyJobData = async () => {
        await ApplyJobApi(jobTitle, jobDetailId, resumeUrl, navigate);
    };

    return (
        <>
            <Header />

            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper">
                                <div className="img-wrapper">
                                    <img src={companyLogo} alt="" style={{ width: "60px", height: "55px" }}/>
                                </div>
                                <div className="content text-start">
                                    <h3 className="product-title">{jobTitle}</h3>
                                    <p className="brand">{companyName}</p>
                                    <div className="tags">
                                        <span><i className="lni-map-marker"></i> {locationName}</span>
                                        <span><i className="lni-calendar"></i> Posted 26 June, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 col-xs-12">
                            <div className="month-price">
                                <span className="year">Yearly</span>
                                <div className="price">$65,000</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <section className="job-detail section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-8 col-md-12 col-xs-12">
                            <div className="content-area text-start" >
                                <h4>Job Description</h4>
                                <p>{description}</p>
                                {/* <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi umsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p> */}
                                <h5>What You Need for this Position</h5>
                                <ul>
                                    {/* <li>- Objective-C</li>
                                    <li>- iOS SDK</li>
                                    <li>- XCode</li>
                                    <li>- Cocoa</li>
                                    <li>- ClojureScript</li> */}
                                    <li>{jobSkills}</li>
                                </ul>
                                <h5>How To Apply</h5>
                                <p>Register or log in to your account on the portal.
                                    Complete your profile with personal, academic, and work details.
                                    Upload your updated resume and any required documents.
                                    Browse available job listings that match your skills and interests.
                                    Click “Apply” on your chosen job and wait for employer responses.</p>

                                <button
                                    className="btn btn-common"
                                    onClick={ApplyJobData}
                                    // disabled={/* !jobStatus || */ jobStatus === "Applied"}
                                >
                                    Apply job
                                </button>
                                {/* <button className="btn btn-common" onClick={DownloadResume}>Download Resume</button> */}
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12">
                            <div className="sideber">
                                <div className="widghet text-start">
                                    <h3>Job Location</h3>
                                    <div className="maps">
                                        <div id="map" className="map-full">
                                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405691.57240383344!2d-122.3212843181106!3d37.40247298383319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon+Valley%2C+CA%2C+USA!5e0!3m2!1sen!2sbd!4v1538319316724" allowFullScreen=""></iframe>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="widghet text-start">
                                    <h3>Share This Job</h3>
                                    <div className="share-job">
                                        <form method="post" className="subscribe-form">
                                            <div className="form-group">
                                                <input type="email" name="Email" className="form-control" placeholder="https://joburl.com" required="" />
                                                <button type="submit" name="subscribe" className="btn btn-common sub-btn"><i className="lni-files"></i></button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </form>
                                        <ul className="mt-4 footer-social">
                                            <li><NavLink className="facebook" to="/"><i className="lni-facebook-filled"></i></NavLink></li>
                                            <li><NavLink className="twitter" to="/"><i className="lni-twitter-filled"></i></NavLink></li>
                                            <li><NavLink className="linkedin" to="/"><i className="lni-linkedin-fill"></i></NavLink></li>
                                            <li><NavLink className="google-plus" to="/"><i className="lni-google-plus"></i></NavLink></li>
                                        </ul>
                                        <div className="meta-tag">
                                            <span className="meta-part"><NavLink to="/"><i className="lni-star"></i> Write a Review</NavLink></span>
                                            <span className="meta-part"><NavLink to="/"><i className="lni-warning"></i> Reports</NavLink></span>
                                            <span className="meta-part"><NavLink to="/"><i className="lni-share"></i> Share</NavLink></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="featured" className="section bg-gray pb-45">
                <div className="container">
                    <h4 className="small-title text-left">Similar Jobs</h4>
                    <div className="row">
                        {
                            allSimilarJobs.map((data) => {
                                return (
                                    <div className="col-lg-6 col-md-12 col-xs-12">
                                        <NavLink className="job-listings-featured" to="/jobDetails">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-xs-12">
                                                    <div className="job-company-logo">
                                                        <img src={data.LOGOFile} alt="" style={{ width: "55px", height: "50px" }} />
                                                    </div>
                                                    <div className="job-details text-start">
                                                        <h3>{data.Slug}</h3>
                                                        <span className="company-neme">{data.Name}</span>
                                                        <div className="tags">
                                                            <span><i className="lni-map-marker"></i>{data.LocationName}</span>
                                                            <span><i className="lni-user"></i>John Smith</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                                                    <div className="tag-type">
                                                        <span className="heart-icon">
                                                            <i className="lni-heart"></i>
                                                        </span>
                                                        <span className="full-time">Full Time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default JobDetails