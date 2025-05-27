import ErrorHandler from "../../ErrorHandler";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiClient } from "../../ApiClient";
import Cookies from 'js-cookie';

export const GetNotificationCountApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/GetNotificationCount';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get notification data");

        // ✅ Set token manually so it's ready for next API call
        if (response.data?.outcome?.tokens) {
            const newToken = response.data.outcome.tokens;
            Cookies.set("UserCredential", newToken, { expires: 7 });
        }

        return response.data.data;
    } catch (error) {
        console.error("Error fetching notification data:", error);
        const errors = ErrorHandler(error, navigate);
        toast.error(errors);
        throw error;
    }
};

export const GetAppliedCandidateApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/GetappliedCandidatedata';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get applied candidate data");

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

export const GetNotificationMsgApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/NotificationMsg';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get applied candidate data");

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

export const EmpViewNotification = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/EmpViewNotification';
    const params = { UserId: userId };

    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            params: params,
        });

        console.log(response.data.data, "get view notification data");

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