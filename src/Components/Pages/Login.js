import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { LoginApi } from '../../Api/LoginApi'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const LoginData = () => {
    if (username === "" || password === "") {
      toast.warning("Please enter all the fields!")
    }
    else {
      LoginApi(username, password, navigate).then((data) => {
        console.log(data)
      })
    }

  }

  return (
    <>
      <Header />
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
                    <div className="input-icon">
                      <i className="lni-user"></i>
                      <input type="text" id="sender-email" className="form-control" name="email" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock"></i>
                      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group form-check text-start">
                    <input type="checkbox" className="form-check-input text-start" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Keep Me Signed In</label>
                  </div>
                  <button className="btn btn-common log-btn" onClick={LoginData}>Submit</button>
                </div>
                <ul className="form-links">
                  <li className="text-center"><NavLink to="/register">Don't have an account?</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Login