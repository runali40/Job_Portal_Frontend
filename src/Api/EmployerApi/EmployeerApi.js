import { apiClient } from "../../ApiClient";
import UrlData from "../../UrlData";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorHandler from "../../ErrorHandler";

export const AddJobApi = (jobTitle, location, category, jobTags, jobType, description, appUrl, closingDate, companyName, website, tagline1, tagline2, base64Image, navigate) => {
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
        logoFile: base64Image,
        typeofJob : jobType,

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
            return null;
        });
};

export const ManageJobApi = (categoryId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const roleId = sessionStorage.getItem('roleId');
    const params = {
        UserId: userId,
        CategoryId: categoryId,
        roleid : roleId
    };
    const url = 'Employeer/MangageJob';
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

export const GetBrowseApi = (id, navigate) => {
    const userId = sessionStorage.getItem('userid');
    console.log(id, "82")
    const params = {
        UserId: userId,
        Id: id
    };
    const url = 'Employeer/Get';
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