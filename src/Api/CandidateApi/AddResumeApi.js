

import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UrlData from '../../UrlData';
import { apiClient } from '../../ApiClient';
import ErrorHandler from '../../ErrorHandler';

export const AddResumeApi = (name, email, professionTitle, location, website, preHour, age, educations, workExperiences, skills, rId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const data = {
        userId: userId,
        name: name,
        email: email,
        professionTitle: professionTitle,
        location: location,
        web: website,
        preHour: preHour,
        age: age,
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

export const ApplyJobApi = (jobTitle, jobDetailId, resumeUrl, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const data = {
        userId: userId,
        // AppliedDate: "",
        Status: "",
        CoverLetter: `I am writing to express my interest in the position of ${jobTitle}`,
        JobId: jobDetailId,
        Resume: resumeUrl


    };
    const url = 'Candidate/Apply';
    return apiClient({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
            toast.success("Resume Added Successfully!")
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

export const GetManageResumeApi = (resumeId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    console.log(resumeId, "82")
    const params = {
        UserId: userId,
        Id: resumeId,
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