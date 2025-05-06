import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { NavLink } from 'react-router-dom'


const AddResume = () => {
    return (
        <>
        <Header/>
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
                                    <p className='text-left'>Already have an account? <NavLink to="/register">Click here to login</NavLink></p>
                                </div>
                                <form className="form-ad">
                                    <h3 className='text-left'>Basic information</h3>
                                    <div className="form-group text-start">
                                        <label className="control-label">Name</label>
                                        <input type="text" className="form-control text-left" placeholder="Name" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left"></label>
                                        <label className="control-label text-left">Email</label>
                                        <input type="text" className="form-control" placeholder="Your@domain.com" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Profession Title</label>
                                        <input type="text" className="form-control" placeholder="Headline (e.g. Front-end developer)" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Location</label>
                                        <input type="text" className="form-control" placeholder="Location, e.g" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Web</label>
                                        <input type="text" className="form-control" placeholder="Website address" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Pre Hour</label>
                                        <input type="text" className="form-control" placeholder="Salary, e.g. 85" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label text-left">Age</label>
                                        <input type="text" className="form-control" placeholder="Years old" />
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
                                    <div className="form-group text-start">
                                        <label className="control-label">Degree</label>
                                        <input type="text" className="form-control" placeholder="Degree, e.g. Bachelor" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Field of Study</label>
                                        <input type="text" className="form-control" placeholder="Major, e.g Computer Science" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">School</label>
                                        <input type="text" className="form-control" placeholder="School name, e.g. Massachusetts Institute of Technology" />
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">From</label>
                                                <input type="text" className="form-control" placeholder="e.g 2014" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">To</label>
                                                <input type="text" className="form-control" placeholder="e.g 2020" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Description</label>
                                        <textarea className="form-control" rows="7"></textarea>
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
                                            <NavLink to="#" className="btn-added"><i className="ti-plus"></i> Add New Education</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="#" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                    <div className="divider"><h3>Work Experience</h3></div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Company Name</label>
                                        <input type="text" className="form-control" placeholder="Company name" />
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Title</label>
                                        <input type="text" className="form-control" placeholder="e.g UI/UX Researcher" />
                                    </div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Date Form</label>
                                                <input type="text" className="form-control" placeholder="e.g 2014" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">Date To</label>
                                                <input type="text" className="form-control" placeholder="e.g 2020" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-start">
                                        <label className="control-label">Description</label>
                                    </div>
                                    <section id="editor"   style={{marginBottom: "30px"}}>
                                        <div id="summernote"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quia aut modi fugit, ratione saepe perferendis odio optio repellat dolorum voluptas excepturi possimus similique veritatis nobis. Provident cupiditate delectus, optio?</p></div>
                                    </section>
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
                                            <NavLink to="#" className="btn-added"><i className="ti-plus"></i> Add New Experience</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="#" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                    <div className="divider"><h3 className='text-start'>Skills</h3></div>
                                    <div className="form-group text-start">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label className="control-label">Skill Name</label>
                                                <input className="form-control" placeholder="Skill name, e.g. HTML" type="text" />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="control-label">% (1-100)</label>
                                                <input className="form-control" placeholder="Skill proficiency, e.g. 90" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-post-btn">
                                        <div className="float-left">
                                            <NavLink to="#" className="btn-added"><i className="ti-plus"></i> Add New Skills</NavLink>
                                        </div>
                                        <div className="float-right">
                                            <NavLink to="#" className="btn-delete"><i className="ti-trash"></i> Delete This</NavLink>
                                        </div>
                                    </div>
                                </form>
                                <NavLink to="/resumePage" className="btn btn-common text-start">Save</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AddResume