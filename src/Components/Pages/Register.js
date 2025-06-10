import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { GetRoleApi, RegisterApi } from '../../Api/LoginApi'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [role, setRole] = useState("")
    const [allRole, setAllRole] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyWebsite, setCompanyWebsite] = useState("")
    const [companyLogo, setCompanyLogo] = useState("")
    const [file, setFile] = useState("")

    useEffect(() => {
        GetRoleData();
    }, [])

    const RegisterData = () => {
        if (role === "") {
            toast.warning("Please select role!")
        }
        else if (username === "" || password === "" || email === "" || retypePassword === "") {
            toast.warning("Please enter all the fields!")
        }
        else {
            RegisterApi(username, password, email, role, companyName, companyWebsite, companyLogo).then((data) => {
                console.log(data)
            })
        }
    }

    const GetRoleData = () => {
        GetRoleApi().then((data) => {
            setAllRole(data)
        })
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile.name); // To show in label

            const reader = new FileReader();

            reader.onloadend = () => {
                setCompanyLogo(reader.result); // base64 string
                console.log("Base64 Image:", reader.result); // You can send this to API
            };

            reader.readAsDataURL(selectedFile); // Convert to base64
        }
    }
    return (
        <>
            {/* <Header /> */}
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Create Your Account</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="content" className="section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6 col-xs-12">
                            <div className="page-login-form box">
                                <h3>
                                    Create Your Account
                                </h3>
                                <div className="login-form">
                                    <div className="form-group">

                                        <div className="d-flex gap-5">
                                            {allRole.map((data) => (
                                                <label className='mx-3' key={data.r_id}>
                                                    <input
                                                        type="radio"
                                                        name="role"
                                                        value={data.r_id}
                                                        checked={role === data.r_id}
                                                        onChange={(e) => setRole(e.target.value)}
                                                    />
                                                    &nbsp;&nbsp;<b>{data.r_rolename}</b>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" className="form-control" name="name" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                        </div>
                                    </div> */}
                                    {allRole.find((item) => item.r_id === role && item.r_rolename === "Employer") &&
                                        <p>Please click on the pricing plan.<NavLink to="/pricing">Click Here</NavLink></p>}
                                    <div className="form-group mt-3">
                                        <div className="input-icon">
                                            <i className="lni-user"></i>
                                            <input type="text" className="form-control" name="name" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-envelope"></i>
                                            <input type="text" className="form-control" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock"></i>
                                            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-unlock"></i>
                                            <input type="password" className="form-control" placeholder="Retype Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                                        </div>
                                    </div>
                                    {allRole.find((item) => item.r_id === role && item.r_rolename === "Employer")
                                        ?
                                        <>
                                            <div className="form-group">
                                                <div className="input-icon">
                                                    <i className="lni-user"></i>
                                                    <input type="text" className="form-control" name="companyName" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-icon">
                                                    <i className="lni-user"></i>
                                                    <input type="text" className="form-control" name="companyWebsite" placeholder="Company Website" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
                                                </div>
                                            </div>
                                            {/* <div className="form"> */}
                                            {/* <div className="input-icon"> */}
                                            {/* <i className="lni-user"></i> */}
                                            <input type="file" className="form-control" name="companyLogo" placeholder="Company Logo" onChange={handleFileChange} />
                                            {/* </div> */}
                                            {/* </div> */}

                                        </>
                                        : null}
                                    <button className="btn btn-common log-btn mt-3" onClick={RegisterData}>Register</button>
                                    <p className="text-center">Already have an account?<NavLink to="/"> Sign In</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default Register