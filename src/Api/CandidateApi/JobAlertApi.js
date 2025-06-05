import { apiClient } from "../../ApiClient";
import ErrorHandler from "../../ErrorHandler";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export const getAllJobAlertApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const currentIndustry = sessionStorage.getItem('currentIndustry');
    const url = 'Candidate/GetallJobAlert';
    const params = { UserId: userId, CurrentIndustry : currentIndustry};

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get featured job api");

        // ✅ Set token manually so it's ready for next API call
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
        console.error("Error fetching applied candidate data:", error);
        const errors = ErrorHandler(error, navigate);
        toast.error(errors);
        throw error;
    }
};

export const UpdateJobAlertApi = async (alertId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Candidate/UpdateAlert';
    const data = {  UserId: userId ,  alertId: alertId};

    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            data: data,
        });

        console.log(response.data.data, "get update job alert data");

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
