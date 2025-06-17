import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'
import { GetCategoryApi, GetCompanyNameApi, GetLocationApi } from '../../../Api/HomeApi'
import { AddJobApi } from '../../../Api/EmployerApi/EmployeerApi'

const PostJob = () => {
  const navigate = useNavigate()
  const [jobTitle, setJobTitle] = useState("")
  const [location, setLocation] = useState("")
  const [allLocation, setAllLocation] = useState([])
  const [category, setCategory] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [jobTags, setJobTags] = useState("")
  const [jobType, setJobType] = useState("")
  const [description, setDescription] = useState("")
  const [appUrl, setAppUrl] = useState("")
  const [closingDate, setClosingDate] = useState("")

  const [companyName, setCompanyName] = useState("")
  const [allCompanyName, setAllCompanyName] = useState([])
  const [website, setWebsite] = useState("")
  const [tagline1, setTagLine1] = useState("")
  const [tagline2, setTagLine2] = useState("")
  const [file, setFile] = useState("")
  const [base64Image, setBase64Image] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetLocationData();  // waits fully
        await GetCategoryData();  // uses updated token
        await GetCompanyNameData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const GetLocationData = async () => {
    const data = await GetLocationApi(navigate);
    setAllLocation(data);
  };

  const GetCompanyNameData = async () => {
    const data = await GetCompanyNameApi(navigate);
    setAllCompanyName(data);
  };

  const GetCategoryData = async () => {
    const data = await GetCategoryApi(navigate);
    setAllCategory(data);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile.name); // To show in label

      const reader = new FileReader();

      reader.onloadend = () => {
        setBase64Image(reader.result); // base64 string
        console.log("Base64 Image:", reader.result); // You can send this to API
      };

      reader.readAsDataURL(selectedFile); // Convert to base64
    }
  };

  const AddJobData = async () => {
    const data = await AddJobApi(jobTitle, location, category, jobTags, jobType, description, appUrl, closingDate, companyName, website, tagline1, tagline2, base64Image, navigate);
    console.log(data)
  }

  return (
    <>
      <Header />

      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Post A Job</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-xs-12">
              <div className="post-job box text-start">
                <h3 className="job-title">Post a new Job</h3>
                <div className="form-ad">
                  <div className="form-group">
                    <label className="control-label">Job Title</label>
                    <input type="text" className="form-control" placeholder="Write job title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Company</label>
                    <div className="search-category-container">
                      <label className="styled-select">
                        <select value={companyName} onChange={(e) => setCompanyName(e.target.value)}>
                          <option value="" disabled hidden>Select Company Name</option>
                          {allCompanyName.map((data) => (
                            <option key={data.CompanyName} value={data.CompanyName}>
                              {data.CompanyName}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    {/* <input type="text" className="form-control" placeholder="Write company name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /> */}
                  </div>
                  <div className="form-group">
                    <label className="control-label">Location <span>(optional)</span></label>
                    <div className="search-category-container">
                      <label className="styled-select">
                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                          <option value="" disabled hidden>Select Location</option>
                          {allLocation.map((data) => (
                            <option key={data.LocationId} value={data.LocationId}>
                              {data.LocationName}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                  </div>
                  <div className="form-group">
                    <label className="control-label">Category</label>
                    <div className="search-category-container">
                      <label className="styled-select">
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                          <option value="" disabled hidden>Select Category</option>
                          {allCategory.map((data) => (
                            <option key={data.CategoryId} value={data.CategoryId}>
                              {data.CategoryName}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Job Tags <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="e.g.PHP,Social Media,Management" value={jobTags} onChange={(e) => setJobTags(e.target.value)} />
                    <p className="note">Comma separate tags, such as required skills or technologies, for this job.</p>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Job Type</label>
                    <input type="text" className="form-control" placeholder="Job Type" value={jobType} onChange={(e) => setJobType(e.target.value)} />

                  </div>
                  <section id="editor">
                    <div className="form-group">
                      <label htmlFor="comment">Description</label>
                      <textarea className="form-control" rows="5" id="comment" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                  </section>
                  <div className="form-group">
                    <label className="control-label">Application email / URL</label>
                    <input type="text" className="form-control" placeholder="Enter an email address or website URL" value={appUrl} onChange={(e) => setAppUrl(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Closing Date <span>(optional)</span></label>
                    <input type="date" className="form-control" placeholder="yyyy-mm-dd" value={closingDate} onChange={(e) => setClosingDate(e.target.value)} />
                  </div>
                  <div className="divider">
                    <h3 className="job-title">Company Details</h3>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Company Name</label>
                    <input type="text" className="form-control" placeholder="Enter the name of the company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Website <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="http://" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Tagline <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="Briefly describe your company" value={tagline1} onChange={(e) => setTagLine1(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label className="control-label">Tagline <span>(optional)</span></label>
                    <input type="text" className="form-control" placeholder="Briefly describe your company" value={tagline2} onChange={(e) => setTagLine2(e.target.value)} />
                  </div>
                  <div className="custom-file mb-3">
                    {/* <input type="file" className="custom-file-input" id="validatedCustomFile" required value={file} onChange={(e) => setFile(e.target.value)} />
                    <label className="custom-file-label form-control" htmlFor="validatedCustomFile">Choose file...</label> */}
                    <input
                      type="file"
                      className="custom-file-input"
                      id="validatedCustomFile"
                      accept="image/*"
                      required
                      onChange={handleFileChange}
                    />
                    <label className="custom-file-label form-control" htmlFor="validatedCustomFile">
                      {file || 'Choose file...'}
                    </label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                  </div>
                  <button className="btn btn-common" onClick={AddJobData}>Submit your job</button>
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

export default PostJob