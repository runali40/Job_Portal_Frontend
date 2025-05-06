import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Login = () => {
  return (
   <>
     <Header/>

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
              <form className="login-form">
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-user"></i>
                    <input type="text" id="sender-email" className="form-control" name="email" placeholder="Username"/>
                  </div>
                </div> 
                <div className="form-group">
                  <div className="input-icon">
                    <i className="lni-lock"></i>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                </div> 
                <div className="form-group form-check text-start">
                  <input type="checkbox" className="form-check-input text-start" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1">Keep Me Signed In</label>
                </div>
                <button className="btn btn-common log-btn">Submit</button>
              </form>
              <ul className="form-links">
                <li className="text-center"><NavLink to="/register">Don't have an account?</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

<Footer/>
   </>
  )
}

export default Login