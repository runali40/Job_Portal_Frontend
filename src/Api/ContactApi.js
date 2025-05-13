import { apiClient } from "../ApiClient";
import UrlData from "../UrlData";

export const ContactApi = (name, email, subject, message) => {
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
            console.error('API error:', error);
            return null;
        });
};