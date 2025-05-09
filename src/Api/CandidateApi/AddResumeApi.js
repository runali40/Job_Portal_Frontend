

import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import UrlData from '../../UrlData';
import apiClient from '../../ApiClient';
import ErrorHandler from '../../ErrorHandler';

export const AddResumeApi = (name, email, professionTitle, location, website, preHour, age, degree, fieldOfStudy, school, from, to, description, companyName, title, expFrom, expTo, skillName, skillProficiency, navigate) => {
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
        degree: degree,
        field_Study: fieldOfStudy,
        school: school,
        schoolFrom: from,
        schoolTo: to,
        company_Name: companyName,
        com_Title: title,
        compStartDate: expFrom,
        compEndDate: expTo,
        skill_Name: skillName,
        proficiencyPercentage: skillProficiency

    };
    const url = 'Candidate/AddResume';
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