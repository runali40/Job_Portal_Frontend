import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { GetRoleApi, LoginApi } from '../../Api/LoginApi'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  // const [allRole, setAllRole] = useState([])
  // const [role, setRole] = useState("")

  // useEffect(() => {
  //   GetRoleData();
  // }, [])

  const LoginData = () => {
    if (username === "" || password === "") {
      toast.warning("Please enter all the fields!")
    }
    else {
      const data = LoginApi(username, password, navigate);
      console.log(data)
    }
  }

  // const GetRoleData = async () => {
  //   const data = await GetRoleApi();
  //   setAllRole(data)
  // }

  return (
    <>
      {/* <Header /> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Login</h3>
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
                  Login
                </h3>
                <div className="login-form">
                  <div className="form-group">
                    {/* <div className="d-flex gap-5">
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
                    </div> */}
                    {/* {allRole.find((item) => item.r_id === role && item.r_rolename === "Employer") &&
                      <p className='mt-2'>Please click on the pricing plan.<NavLink to="/pricing">Click Here</NavLink></p>} */}
                    <div className="input-icon mt-3">
                      <i className="lni-user"></i>
                      <input type="text" id="sender-email" className="form-control" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#555"
                        }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  {/* <div className="form-group form-check text-start">
                    <input type="checkbox" className="form-check-input text-start" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep Me Signed In</label>
                  </div> */}
                  <button className="btn btn-common log-btn" onClick={LoginData}>Submit</button>
                </div>
                <ul className="form-links">
                  <li className="text-center"><NavLink to="/register">Don't have an account?</NavLink></li>
                </ul>
                <ul className="form-links">
                  <li className="text-center mt-2"><NavLink to="/forgotPassword">Forgot Password</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  )
}

export default Login