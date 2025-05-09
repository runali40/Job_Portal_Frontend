import apiClient from "../ApiClient";
import UrlData from "../UrlData";

export const GetLocationApi = () => {
    const userId = sessionStorage.getItem('userid');
    const params = {
        UserId: userId
    };
    const url = 'Home/GetLocation';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            return response.data.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            return [];
        });
};

export const GetCategoryApi = () => {
    const userId = sessionStorage.getItem('userid');
    const params = {
        UserId: userId
    };
    const url = 'Home/GetCategories';
    return apiClient({
        method: 'get',
        url: (UrlData + url).toString(),
        params: params,
    })
        .then((response) => {
            console.log('API response:', response.data.data);
            return response.data.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            return [];
        });
};
