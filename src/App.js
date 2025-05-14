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

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="/jobPage" element={<JobPage />} />
        <Route path="/jobDetails" element={<JobDetails />} />
        <Route path="/resumePage" element={<ResumePage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/browseJobs" element={<BrowseJobs />} />
        <Route path="/browseCategories" element={<BrowseCategories />} />
        <Route path="/addResume" element={<AddResume />} />
        <Route path="/manageResume" element={<ManageResume />} />
        <Route path="/jobAlerts" element={<JobAlerts />} />
        <Route path="/manageJobs" element={<ManageJobs />} />
        <Route path="/manageApplications" element={<ManageApplications />} />
        <Route path="/browseResumes" element={<BrowseResumes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/bookMarkedJobs" element={<BookMarkedJobs />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/uploadCv" element={<UploadCv />} />
      </Routes>
    </div>
  );
}

export default App;
