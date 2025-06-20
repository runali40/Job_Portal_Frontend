

import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UrlData from '../../UrlData';
import { apiClient } from '../../ApiClient';
import ErrorHandler from '../../ErrorHandler';

export const AddResumeApi = (name, email, professionTitle, location,category, website, preHour, age, aboutMe, base64Image, educations, workExperiences, skills, rId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const data = {
        userId: userId,
        name: name,
        email: email,
        professionTitle: professionTitle,
        location: location,
        currentIndustry : category,
        web: website,
        preHour: preHour,
        age: age,
        aboutMe: aboutMe,
        profilePhoto: base64Image,
        educations: educations,
        workExperiences: workExperiences,
        skills: skills,
    };
    if (rId) {
        data.Id = rId;
    }
    const url = 'Candidate/AddResume';
    return apiClient({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
            toast.success("Resume Added Successfully!")
            toast.success(
                data.Id ? "Resume Updated successfully!" : "Resume Added Successfully!"
            );
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};

export const ManageResumeApi = (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const params = {
        UserId: userId,

    };
    const url = 'Candidate/ManageResume';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            console.log("token1", response.data.outcome.tokens)
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};

export const GetResumeApi = (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const params = {
        UserId: userId,

    };
    const url = 'Candidate/GetResume';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            console.log("token1", response.data.outcome.tokens)
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};

export const DownloadResumeApi = (fileName, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const params = {
        UserId: userId,
        fileName: fileName
    };
    const url = 'UserMaster/DownloadResume';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('download resume:', response.data.data);
            console.log("token1", response.data.outcome.tokens)
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};

export const ApplyJobApi = (jobTitle, jobDetailId, resumeUrl, navigate) => {
    const userId = sessionStorage.getItem("userid");
  
    const data = {
      userId: userId,
      Status: "",
      CoverLetter: `I am writing to express my interest in the position of ${jobTitle}`,
      JobId: jobDetailId,
      Resume: resumeUrl,
    };
  
    const url = "Candidate/Apply";
  
    return apiClient({
      method: "post",
      url: UrlData + url,
      data: data,
    })
      .then((response) => {
        console.log("API response:", response);
        toast.success("Resume Added Successfully!");
  
        const token1 = response?.data?.outcome?.tokens;
        if (token1) {
          Cookies.set("UserCredential", token1, { expires: 7 });
        }
  
        return response.data;
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.outcome
        ) {
          const token1 = error.response.data.outcome.tokens;
          if (token1) {
            Cookies.set("UserCredential", token1, { expires: 7 });
          }
        }
  
        console.log(error);
  
        // 🔁 Handle specific error status 409 (conflict)
        if (error?.response?.status === 409) {
          toast.error("This job is already applied!");
        } else {
          const errors = ErrorHandler(error, navigate);
          toast.error(errors);
        }
  
        return [];
      });
  };

export const GetManageResumeApi = (resumeId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    console.log(resumeId, "82")
       const resumeId1 = sessionStorage.getItem('resumeId');
    const params = {
        UserId: userId,
        // Id: resumeId1 === undefined ? resumeId : resumeId1,
        Id: resumeId != null ? resumeId : resumeId1 
    };
    const url = 'Candidate/GetManageResume';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            console.log("token1", response.data.outcome.tokens)
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};
export const GetManageResumeApi1 = (resumeId, navigate) => {
    const userId = sessionStorage.getItem('userid');
     const resumeId1 = sessionStorage.getItem('resumeId');
    console.log(resumeId, "82")
    const params = {
        UserId: userId,
        Id: resumeId1,
        // Skills : [],
        // Educations : [],
        // WorkExperiences : []
    };
    const url = 'Candidate/GetManageResume';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            console.log("token1", response.data.outcome.tokens)
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data.data;
        })
        .catch((error) => {
            if (
                error.response &&
                error.response.data &&
                error.response.data.outcome
            ) {
                const token1 = error.response.data.outcome.tokens;
                Cookies.set("UserCredential", token1, { expires: 7 });
            }
            console.log(error);

            const errors = ErrorHandler(error, navigate);
            toast.error(errors);
            return [];
        });
};