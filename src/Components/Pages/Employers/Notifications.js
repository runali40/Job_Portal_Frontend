import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { NavLink, useNavigate } from "react-router-dom";
import {
  GetAppliedCandidateApi,
  GetNotificationApi,
} from "../../../Api/EmployerApi/NotificationApi";

const Notifications = () => {
  // useEffect(() => {
  //   GetNotificationData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await GetNotificationData(); // waits fully

        await GetAppliedCandidateData(); // uses updated token
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const navigate = useNavigate();

  const GetNotificationData = async () => {
    const data = await GetNotificationApi(navigate);
    console.log(data);
  }
     const GetAppliedCandidateData = async () => {
    const data = await GetAppliedCandidateApi(navigate);
    console.log(data);

  };
  
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-header">
                <h3>Notifications</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="right-sideabr text-start">
                <h4>Manage Account</h4>
                <ul className="list-item">
                  <li>
                    <NavLink to="/resumePage">My Resume</NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookMarkedJobs">Bookmarked Jobs</NavLink>
                  </li>
                  <li>
                    <NavLink className="active" to="/notifications">
                      Notifications <span className="notinumber">2</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/manageApplications">
                      Manage Applications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jobAlerts">Job Alerts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/changePassword">Change Password</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Sign Out</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="job-alerts-item notification">
                <h3 className="alerts-title text-start">Your Notifications</h3>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-1.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-2.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-3.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-4.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-5.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="thums">
                    <img src="assets/img/jobs/img-6.jpg" alt="" />
                  </div>
                  <div className="text-left">
                    <p>
                      Your Bookmarked job "Web designer needed" from Banana Inc,
                      has expired.
                    </p>
                    <span className="time">
                      <i className="lni-alarm-clock"></i>3 Hours ago
                    </span>
                  </div>
                </div>

                <ul className="pagination">
                  <li className="active">
                    <NavLink to="/" className="btn btn-common">
                      <i className="ti-angle-left"></i> prev
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">2</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">3</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">4</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">5</NavLink>
                  </li>
                  <li className="active">
                    <NavLink to="/" className="btn btn-common">
                      Next <i className="ti-angle-right"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notifications;
