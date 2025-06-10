import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { GetBrowseApi } from '../../../Api/EmployerApi/EmployeerApi'
import { ApplyJobApi, DownloadResumeApi, GetResumeApi } from '../../../Api/CandidateApi/AddResumeApi'
import { GetAppliedCandidateApi, StatusByEmployee } from '../../../Api/EmployerApi/NotificationApi'
// import { GetBrowseApi } from '../../Api/EmployerApi/EmployeerApi'
// import { ApplyJobApi, DownloadResumeApi, GetResumeApi } from '../../Api/CandidateApi/AddResumeApi'


const ViewAppliedCandidates = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const { ApplicationId } = location.state || {};
    console.log(location.state, "10")
    console.log("Received ID:", ApplicationId);
    console.log(ApplicationId, "14")
    // const [searchParams] = useSearchParams();
    // const jobId = searchParams.get("id");
    // console.log(jobId, "14")
    const [postName, setPostName] = useState("")
    const [candidateName, setCandidateName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [locationName, setLocationName] = useState("")
    const [closingDate, setClosingDate] = useState("")
    const [postingDate, setPostingDate] = useState("")
    const [jobSkills, setJobSkills] = useState("")
    const [description, setDescription] = useState("")
    const [jobDetailId, setJobDetailId] = useState("")
    const [resumeUrl, setResumeUrl] = useState("")
    const [fileName, setFileName] = useState("")
    const [currentIndustry, setCurrentIndustry] = useState("")
    const [resumeId, setResumeId] = useState("")

    // useEffect(() => {
    //     GetJobDetails();
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            try {
                await GetJobDetails();  // waits fully

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    const GetJobDetails = async () => {
        const data = await GetAppliedCandidateApi(ApplicationId, navigate);
        console.log(data)
        setCandidateName(data.Name)
        setPostName(data.PostName)
        setResumeId(data.ResumeId)
        // setJobTitle(data.Slug)
        // setCompanyName(data.Name)
        // setClosingDate(data.ClosingDate)
        // setJobSkills(data.Introduce)
        // setDescription(data.Description)
        // setLocationName(data.LocationName)
        // setJobDetailId(data.Id)
        setCurrentIndustry(data.CurrentIndustry)
        setFileName(data.UFileName)


    };

    const ShowStatusByEmployee = async (status) => {
        const data = await StatusByEmployee(ApplicationId, status, currentIndustry, navigate);
        console.log(data);
      };

    const DownloadResume = async () => {
        const data = await DownloadResumeApi(fileName, navigate);

        if (!data?.fileBytes) {
            console.error("No fileBytes found in response");
            return;
        }

        // Decode base64 to binary
        const byteCharacters = atob(data.fileBytes);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        // Create a byte array and blob
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/pdf' });

        // Create a link element to trigger download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName || 'Resume'}.pdf`; // Customize file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Cleanup
    };

    
  const GetViewResume = () => {
    console.log("30")
    navigate("/resumePage", {
      state: { resumeId },
    }
    )
  }

    return (
        <>
            <Header />

            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-xs-12">
                            <div className="breadcrumb-wrapper">
                                <div className="img-wrapper">
                                    <img src="assets/img/about/company-logo.png" alt="" />
                                </div>
                                <div className="content text-start">
                                    <h3 className="product-title">{postName}</h3>
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
                                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                                <button className="btn btn-common mx-1"  onClick={GetViewResume}>View Resume</button>
                                <button className="btn btn-common mx-1" onClick={DownloadResume}>Download Resume</button>
                                <button
                                    className="btn btn-common mx-1"
                                    onClick={() => ShowStatusByEmployee("Approved")}
                                >
                                    Approved
                                </button>

                                <button
                                    className="btn btn-common mx-1"
                                    onClick={() => ShowStatusByEmployee("Rejected")}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ViewAppliedCandidates