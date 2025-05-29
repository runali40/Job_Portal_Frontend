import { apiClient } from "../ApiClient";
import ErrorHandler from "../ErrorHandler";
import UrlData from "../UrlData";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export const ContactApi = (name, email, subject, message, navigate) => {
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };
    const url = 'Auth';
    return apiClient({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
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