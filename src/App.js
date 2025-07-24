import './App.css';
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/line-icons.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/owl.theme.default.css'
import '../src/assets/css/slicknav.min.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/main.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/uploadCv.css'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import PostJob from './Components/Pages/Employers/PostJob';
import JobPage from './Components/Pages/JobPage';
import JobDetails from './Components/Pages/JobDetails';
import ResumePage from './Components/Pages/ResumePage';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import BrowseJobs from './Components/Pages/Candidates/BrowseJobs';
import BrowseCategories from './Components/Pages/Candidates/BrowseCategories';
import AddResume from './Components/Pages/Candidates/AddResume';
import ManageResume from './Components/Pages/Candidates/ManageResume';
import JobAlerts from './Components/Pages/Candidates/JobAlerts';
import ManageJobs from './Components/Pages/Employers/ManageJobs';
import ManageApplications from './Components/Pages/Employers/ManageApplications';
import BrowseResumes from './Components/Pages/Employers/BrowseResumes';
import Blog from './Components/Pages/Blog';
import ChangePassword from './Components/Pages/Employers/ChangePassword';
import BookMarkedJobs from './Components/Pages/Employers/BookMarkedJobs';
import Notifications from './Components/Pages/Employers/Notifications';
import Pricing from './Components/Pages/Pricing';
import UploadCv from './Components/Pages/Candidates/UploadCv';
import AppliedCandidate from './Components/Pages/Employers/AppliedCandidate';
import ViewAppliedCandidates from './Components/Pages/Employers/ViewAppliedCandidates';
import PaymentGateway from './Components/Pages/Employers/PaymentGateway';
import ForgotPassword from './Components/Pages/Candidates/ForgotPassword';
import CreateOrder from './Components/Pages/PaymentGateway/CreateOrder';
import PrivateRoute from './Components/Pages/PrivateRoute';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/paymentGateway" element={<PaymentGateway />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/createOrder" element={<CreateOrder />}/>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />

        {/* <Route path="/" element={<Login />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/postJob" element={<PrivateRoute><PostJob /></PrivateRoute>} />
        <Route path="/jobPage" element={<PrivateRoute><JobPage /></PrivateRoute>} />
        <Route path="/jobDetails" element={<PrivateRoute><JobDetails /></PrivateRoute>} />
        <Route path="/resumePage" element={<PrivateRoute><ResumePage /></PrivateRoute>} />
        <Route path="/privacyPolicy" element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>} />
        <Route path="/browseJobs" element={<PrivateRoute><BrowseJobs /></PrivateRoute>} />
        <Route path="/browseCategories" element={<PrivateRoute><BrowseCategories /></PrivateRoute>} />
        <Route path="/addResume" element={<PrivateRoute><AddResume /></PrivateRoute>} />
        <Route path="/manageResume" element={<PrivateRoute><ManageResume /></PrivateRoute>} />
        <Route path="/jobAlerts" element={<PrivateRoute><JobAlerts /></PrivateRoute>} />
        <Route path="/manageJobs" element={<PrivateRoute><ManageJobs /></PrivateRoute>} />
        <Route path="/manageApplications" element={<PrivateRoute><ManageApplications /></PrivateRoute>} />
        <Route path="/browseResumes" element={<PrivateRoute><BrowseResumes /></PrivateRoute>} />
        <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
        <Route path="/changePassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
        <Route path="/bookMarkedJobs" element={<PrivateRoute><BookMarkedJobs /></PrivateRoute>} />
        <Route path="/notifications" element={<PrivateRoute><Notifications /></PrivateRoute>} />
        <Route path="/appliedCandidate" element={<PrivateRoute><AppliedCandidate /></PrivateRoute>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/uploadCv" element={<PrivateRoute><UploadCv /></PrivateRoute>} />
        <Route path="/viewAppliedCandidates" element={<PrivateRoute><ViewAppliedCandidates /></PrivateRoute>} />
        {/* <Route path="/paymentGateway" element={<PrivateRoute><PaymentGateway /></PrivateRoute>} />
        <Route path="/forgotPassword" element={<PrivateRoute><ForgotPassword /></PrivateRoute>} />
        <Route path="/createOrder" element={<PrivateRoute><CreateOrder /></PrivateRoute>} /> */}
      </Routes>
    </div>
  );
}

export default App;
