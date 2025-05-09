import apiClient from "../ApiClient";
import UrlData from "../UrlData";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AddJobApi = (jobTitle, location, category, jobTags, description, appUrl, closingDate, companyName, website, tagline1, tagline2, file) => {
    const userId = sessionStorage.getItem('userid');
    const data = {
        UserId: userId,
        slug: jobTitle,
        name: companyName,
        location: location,
        categoryId: category,
        introduce: jobTags,
        description: description,
        emailId: appUrl,
        closingDate: closingDate,
        website: website,
        tagline1: tagline1,
        tagline2: tagline2,
        // name: file,

    };
    const url = 'Employeer/AddJob';
    return apiClient({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
            toast.success("Job Added Successfully!")
            const token1 = response.data.outcome.tokens;
            Cookies.set("UserCredential", token1, { expires: 7 });
            return response.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            return null;
        });
};