import React, { useState, useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink, useNavigate } from 'react-router-dom'
import { AddResumeApi } from '../../../Api/CandidateApi/AddResumeApi'
import { GetLocationApi } from '../../../Api/HomeApi'


const AddResume = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [professionTitle, setProfessionTitle] = useState("")
    const [location, setLocation] = useState("")
    const [allLocation, setAllLocation] = useState([])
    const [website, setWebsite] = useState("")
    const [preHour, setPreHour] = useState("")
    const [age, setAge] = useState("")

    const [degree, setDegree] = useState("")
    const [fieldOfStudy, setFieldOfStudy] = useState("")
    const [school, setSchool] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [description, setDescription] = useState("")

    const [companyName, setCompanyName] = useState("")
    const [title, setTitle] = useState("")
    const [expFrom, setExpFrom] = useState("")
    const [expTo, setExpTo] = useState("")
    const [workDescription, setWorkDescription] = useState("")

    const [skillName, setSkillName] = useState("")
    const [skillProficiency, setSkillProficiency] = useState("")


    useEffect(() => {
        GetLocationData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const GetLocationData = () => {
        GetLocationApi(navigate).then((data) => {
            setAllLocation(data)
        })
    }

    const AddResumeData = () => {
        AddResumeApi(name, email, professionTitle, location, website, preHour, age, degree, fieldOfStudy, school, from, to, description, companyName, title, expFrom, expTo, workDescription, skillName, skillProficiency, navigate).then((data) => {
            console.log(data)
        })
    }

    const currentYear = new Date().getFullYear();
    const years = Array.from(new Array(50), (val, index) => currentYear - index);

    return (
        <>
            <Header />
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Create Resume</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-12 col-xs-12">
                            <div className="add-resume box">
                                <div className="post-header ">
                                    <p className='text-left'>Already have an account? <NavLink to="/login">Click here to login</NavLink></p>
                                </div>
                                <div className="form-ad">
                                    <h3 className='text-left'>Basic information</h3>
                                    <div className="form-group text-start">
                                        <label className="control-label">Name</label>
                                        <input type="text" className="form-control text-left" placeholder="Name" value={name} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setName(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left"></label>
                                        <label className="control-label text-left">Email</label>
                                        <input type="email" className="form-control" placeholder="Your@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Profession Title</label>
                                        <input type="text" className="form-control" placeholder="Headline (e.g. Front-end developer)" value={professionTitle} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setProfessionTitle(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Location</label>

                                        <label className="styled-select form-control">
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
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Web</label>
                                        <input type="text" className="form-control" placeholder="Website address" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Pre Hour</label>
                                        <input type="text" className="form-control" placeholder="Salary, e.g. 85" value={preHour}
                                            maxLength={6}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (/^\d*$/.test(value)) {
                                                    setPreHour(value);
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Age</label>
                                        <input type="text" className="form-control" placeholder="Years old" value={age} maxLength={2}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (/^\d*$/.test(value)) {
                                                    setAge(value);
                                                }
                                            }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="button-group">
                                            <div className="action-buttons">
                                                <div className="upload-button">
                                                    <button className="btn btn-common">Choose a cover image</button>
                                                    <input id="cover_img_file_2" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='text-start'>Education</h3>
                                    <div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Degree</label>
                                        <input type="text" className="form-control" placeholder="Degree, e.g. Bachelor" value={degree} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setDegree(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Field of Study</label>
                                        <input type="text" className="form-control" placeholder="Major, e.g Computer Science" value={fieldOfStudy} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setFieldOfStudy(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">School</label>
                                        <input type="text" className="form-control" placeholder="School name, e.g. Massachusetts Institute of Technology" value={school} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setSchool(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">From</label>
                                                <select
                                                    className="form-control"
                                                    value={from}
                                                    onChange={(e) => setFrom(e.target.value)}
                                                >
                                                    <option value="">e.g 2014</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">To</label>
                                                <select
                                                    className="form-control"
                                                    value={to}
                                                    onChange={(e) => setTo(e.target.value)}
                                                >
                                                    <option value="">e.g 2020</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Description</label>
                                        <textarea className="form-control" rows="4" value={description} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setDescription(input);
                                            }
                                        }}></textarea>
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="button-group">
                                            <div className="action-buttons">
                                                <div className="upload-button">
                                                    <button className="btn btn-common">Choose a cover Logo</button>
                                                    <input id="cover_img_file_3" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-post-btn">
                                        <div className="float-left">
                                            <NavLink to="/" className="btn-added"><i className="ti-plus"></i> Add New Education</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="/" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="divider"><h3>Work Experience</h3></div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Company Name</label>
                                        <input type="text" className="form-control" placeholder="Company name" value={companyName} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setCompanyName(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Title</label>
                                        <input type="text" className="form-control" placeholder="e.g UI/UX Researcher" value={title} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setTitle(input);
                                            }
                                        }} />
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Date From</label>
                                                <select
                                                    className="form-control"
                                                    value={expFrom}
                                                    onChange={(e) => setExpFrom(e.target.value)}
                                                >
                                                    <option value="">e.g 2014</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">Date To</label>
                                                <select
                                                    className="form-control"
                                                    value={expTo}
                                                    onChange={(e) => setExpTo(e.target.value)}
                                                >
                                                    <option value="">e.g 2020</option>
                                                    {years.map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Description</label>
                                        <textarea className="form-control" rows="4" value={workDescription} onChange={(e) => {
                                            const input = e.target.value;
                                            if (/^[a-zA-Z\s]*$/.test(input)) {
                                                setWorkDescription(input);
                                            }
                                        }}></textarea>
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="button-group">
                                            <div className="action-buttons">
                                                <div className="upload-button">
                                                    <button className="btn btn-common">Choose a cover Logo</button>
                                                    <input id="cover_img_file_1" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-post-btn">
                                        <div className="float-left">
                                            <NavLink to="/" className="btn-added"><i className="ti-plus"></i> Add New Experience</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="/" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                    <div className="divider"><h3 className='text-start'>Skills</h3></div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Skill Name</label>
                                                <input className="form-control" placeholder="Skill name, e.g. HTML" type="text" value={skillName} onChange={(e) => {
                                                    const input = e.target.value;
                                                    if (/^[a-zA-Z\s]*$/.test(input)) {
                                                        setSkillName(input);
                                                    }
                                                }} />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">% (1-100)</label>
                                                <input className="form-control" placeholder="Skill proficiency, e.g. 90" type="text" value={skillProficiency} onChange={(e) => setSkillProficiency(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-post-btn">
                                        <div className="float-left">
                                            <NavLink to="/" className="btn-added"><i className="ti-plus"></i> Add New Skills</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="/" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-start'>
                                    <button className="btn btn-common text-start" onClick={AddResumeData}>Save</button>
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

export default AddResume