import ErrorHandler from "../ErrorHandler";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiClient } from "../ApiClient";

export const GetLocationApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Home/GetLocation';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get location data");

        // ✅ Set token manually so it's ready for next API call
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
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
    }
};
export const GetCategoryApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Home/GetCategories';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get categories data");
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
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
    }
};
export const GetCompanyNameApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const roleId = sessionStorage.getItem('roleId');
    const url = 'Home/GetCompanyName';
    const params = { UserId: userId, roleid: roleId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get company name data");

        // ✅ Set token manually so it's ready for next API call
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
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
    }
};
export const GetJobTitleApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Home/GetJobTitle';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get job title data");

        // ✅ Set token manually so it's ready for next API call
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
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
    }
};
export const JobSearchApi = async (locationId, categoryId, companyName, jobTitle, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Home/SearchJob';
    const params = { UserId: userId, locationId: locationId, categoryId: categoryId, CompanyName: companyName, JobTitle: jobTitle };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get categories data");
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
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
    }
};

