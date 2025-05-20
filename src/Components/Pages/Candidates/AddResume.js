import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  AddResumeApi,
  GetManageResumeApi,
} from "../../../Api/CandidateApi/AddResumeApi";
import { GetLocationApi } from "../../../Api/HomeApi";

const AddResume = () => {
  const navigate = useNavigate();
  const locationValue = useLocation();
  const { resumeId } = locationValue.state || {};
  console.log(resumeId, "resumeID");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [professionTitle, setProfessionTitle] = useState("");
  const [location, setLocation] = useState("");
  const [allLocation, setAllLocation] = useState([]);
  const [website, setWebsite] = useState("");
  const [preHour, setPreHour] = useState("");
  const [age, setAge] = useState("");
  const [rId, setRId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetLocationData(); // waits fully
        if (resumeId) {
          await GetManageResumeData(); // uses updated token
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const GetManageResumeData = async () => {
    const data = await GetManageResumeApi(resumeId, navigate);
    console.log(data, "data 30");
    setEducations(data.educations);
    setWorkExperiences(data.workExperiences);
    setSkills(data.skills);
    setName(data.model1.Name);
    setEmail(data.model1.Email);
    setProfessionTitle(data.model1.ProfessionTitle);
    setLocation(data.model1.Location);
    setWebsite(data.model1.Web);
    setPreHour(data.model1.PreHour);
    setAge(data.model1.Age);
    setRId(data.model1.Id);
  };

  const GetLocationData = async () => {
    const data = await GetLocationApi(navigate);
    setAllLocation(data);
  };

  const AddResumeData = () => {
    AddResumeApi(
      name,
      email,
      professionTitle,
      location,
      website,
      preHour,
      age,
      educations,
      workExperiences,
      skills,
      rId,
      navigate
    ).then((data) => {
      console.log(data);
    });
  };

  // const currentYear = new Date().getFullYear();
  // const years = Array.from(new Array(50), (val, index) => currentYear - index);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const [educations, setEducations] = useState([
    {
      Degree: "",
      FieldofStudy: "",
      School: "",
      SchoolFrom: "",
      SchoolTo: "",
      //   description:  '',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        Degree: "",
        FieldofStudy: "",
        School: "",
        SchoolFrom: "",
        SchoolTo: "",
        description: "",
      },
    ]);
  };

  const deleteEducation = (index) => {
    if (educations.length === 1) return; // Prevent deleting last form
    const updated = educations.filter((_, i) => i !== index);
    setEducations(updated);
  };
  const [workExperiences, setWorkExperiences] = useState([
    {
      CompanyName: "",
      Title: "",
      CompDateFrom: "",
      CompDateTo: "",
      //   workDescription: "",
    },
  ]);
  const handleAddExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        CompanyName: "",
        Title: "",
        CompDateFrom: "",
        CompDateTo: "",
        description: "",
      },
    ]);
  };

  const handleDeleteExperience = (index) => {
    if (workExperiences.length === 1) return;
    const updated = [...workExperiences];
    updated.splice(index, 1);
    setWorkExperiences(updated);
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...workExperiences];
    updated[index][field] = value;
    setWorkExperiences(updated);
  };
  const [skills, setSkills] = useState([
    {
      SkillName: "",
      SkillProficiency: "",
    },
  ]);
  const addSkill = () => {
    setSkills([
      ...skills,
      {
        SkillName: "",
        SkillProficiency: "",
      },
    ]);
  };

  const deleteSkill = (index) => {
    const updated = [...skills];
    updated.splice(index, 1);
    setSkills(updated);
  };

  const handleSkillChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

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
                  <p className="text-left">
                    Already have an account?{" "}
                    <NavLink to="/login">Click here to login</NavLink>
                  </p>
                </div>
                <div className="form-ad">
                  <h3 className="text-left">Basic information</h3>
                  <div className="form-group text-start">
                    <label className="control-label">Name</label>
                    <input
                      type="text"
                      className="form-control text-left"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^[a-zA-Z\s]*$/.test(input)) {
                          setName(input);
                        }
                      }}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label className="control-label text-left"></label>
                    <label className="control-label text-left">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label className="control-label text-left">
                      Profession Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Headline (e.g. Front-end developer)"
                      value={professionTitle}
                      onChange={(e) => {
                        const input = e.target.value;
                        if (/^[a-zA-Z\s]*$/.test(input)) {
                          setProfessionTitle(input);
                        }
                      }}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label className="control-label text-left">Location</label>

                    <label className="styled-select form-control">
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      >
                        <option value="" disabled hidden>
                          Select Location
                        </option>
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Website address"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  <div className="form-group text-start">
                    <label className="control-label text-left">Pre Hour</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Salary, e.g. 85"
                      value={preHour}
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Years old"
                      value={age}
                      maxLength={2}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value)) {
                          setAge(value);
                        }
                      }}
                    />
                  </div>
                  <div className="form-group text-start">
                    <div className="button-group">
                      <div className="action-buttons">
                        <div className="upload-button">
                          <button className="btn btn-common">
                            Choose a cover image
                          </button>
                          <input id="cover_img_file_2" type="file" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-start">Education</h3>
                    {educations.map((edu, index) => (
                      <div
                        key={edu.id}
                        className="education-section mb-4 border p-3 rounded"
                      >
                        <h3 className="text-start">Education {index + 1}</h3>
                        <div className="form-group text-start">
                          <label className="control-label">Degree</label>
                          <input
                            type="text"
                            className="form-control"
                            value={edu.Degree}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleChange(index, "Degree", val);
                            }}
                            placeholder="e.g. Bachelor"
                          />
                        </div>

                        <div className="form-group text-start">
                          <label className="control-label">
                            Field of Study
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={edu.FieldofStudy}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleChange(index, "FieldofStudy", val);
                            }}
                            placeholder="e.g. Computer Science"
                          />
                        </div>

                        <div className="form-group text-start">
                          <label className="control-label">School</label>
                          <input
                            type="text"
                            className="form-control"
                            value={edu.School}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleChange(index, "School", val);
                            }}
                            placeholder="e.g. MIT"
                          />
                        </div>

                        <div className="form-group text-start">
                          <div className="row">
                            <div className="col-md-6">
                              <label className="control-label">From</label>
                              <select
                                className="form-control"
                                value={edu.SchoolFrom}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "SchoolFrom",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                  <option key={y} value={y}>
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label className="control-label">To</label>
                              <select
                                className="form-control"
                                value={edu.SchoolTo}
                                onChange={(e) =>
                                  handleChange(
                                    index,
                                    "SchoolTo",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                  <option key={y} value={y}>
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-group text-start">
                          <label className="control-label">Description</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={edu.description}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleChange(index, "description", val);
                            }}
                          ></textarea>
                        </div>

                        <div className="d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteEducation(index)}
                          >
                            Delete This
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="text-start mt-3">
                      <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={addEducation}
                      >
                        <i className="ti-plus"></i> Add New Education
                      </button>
                    </div>
                  </div>
                  {/* 
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
                                    </div> */}
                  <div>
                    <h3 className="text-start mt-4">Work Experience</h3>
                    {workExperiences.map((exp, index) => (
                      <div
                        key={exp.id}
                        className="education-section mb-4 border p-3 rounded"
                      >
                        <h3 className="text-start">Experience {index + 1}</h3>

                        <div className="form-group text-start">
                          <label className="control-label">Job Title</label>
                          <input
                            type="text"
                            className="form-control"
                            value={exp.Title}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleExperienceChange(index, "Title", val);
                            }}
                            placeholder="e.g. Software Engineer"
                          />
                        </div>

                        <div className="form-group text-start">
                          <label className="control-label">Company</label>
                          <input
                            type="text"
                            className="form-control"
                            value={exp.CompanyName}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleExperienceChange(
                                  index,
                                  "CompanyName",
                                  val
                                );
                            }}
                            placeholder="e.g. Google"
                          />
                        </div>

                        <div className="form-group text-start">
                          <div className="row">
                            <div className="col-md-6">
                              <label className="control-label">From</label>
                              <select
                                className="form-control"
                                value={exp.CompDateFrom}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "CompDateFrom",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                  <option key={y} value={y}>
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label className="control-label">To</label>
                              <select
                                className="form-control"
                                value={exp.CompDateTo}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "CompDateTo",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Select Year</option>
                                {years.map((y) => (
                                  <option key={y} value={y}>
                                    {y}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-group text-start">
                          <label className="control-label">Description</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            value={exp.description}
                            onChange={(e) => {
                              const val = e.target.value;
                              if (/^[a-zA-Z\s]*$/.test(val))
                                handleExperienceChange(
                                  index,
                                  "description",
                                  val
                                );
                            }}
                          ></textarea>
                        </div>

                        <div className="d-flex justify-content-between">
                          {workExperiences.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => handleDeleteExperience(index)}
                            >
                              Delete This
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="text-start mt-3">
                      <button
                        type="button"
                        className="btn btn-primary btn-md"
                        onClick={handleAddExperience}
                      >
                        <i className="ti-plus"></i> Add New Work Experience
                      </button>
                    </div>
                  </div>

                  {/* <div className="divider"><h3 className='text-start'>Skills</h3></div>
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
                                    </div> */}
                  <div className="divider">
                    <h3 className="text-start">Skills</h3>
                  </div>

                  {skills.map((skill, index) => (
                    <div
                      key={skill.id}
                      className="education-section mb-4 border p-3 rounded"
                    >
                      <h3 className="text-start">Skill {index + 1}</h3>

                      <div className="form-group text-start">
                        <div className="row">
                          <div className="col-md-6">
                            <label className="control-label">Skill Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g. HTML"
                              value={skill.SkillName}
                              onChange={(e) => {
                                const input = e.target.value;
                                if (/^[a-zA-Z\s]*$/.test(input)) {
                                  handleSkillChange(index, "SkillName", input);
                                }
                              }}
                            />
                          </div>

                          <div className="col-md-6">
                            <label className="control-label">% (1–100)</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g. 90"
                              value={skill.SkillProficiency}
                              onChange={(e) => {
                                const val = e.target.value;
                                if (
                                  /^\d{0,3}$/.test(val) &&
                                  (+val <= 100 || val === "")
                                ) {
                                  handleSkillChange(
                                    index,
                                    "SkillProficiency",
                                    val
                                  );
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="add-post-btn d-flex justify-content-between mt-2">
                        {skills.length > 1 && (
                          <button
                            type="button"
                            className="btn btn-delete"
                            onClick={() => deleteSkill(index)}
                          >
                            <i className="ti-trash"></i> Delete This
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="text-start mt-3">
                    <button
                      type="button"
                      className="btn btn-primary btn-md"
                      onClick={addSkill}
                    >
                      <i className="ti-plus"></i> Add New Skill
                    </button>
                  </div>
                </div>
                <div className="text-start">
                  <button
                    className="btn btn-common text-start"
                    onClick={AddResumeData}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddResume;
