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

export const JobSearchApi = async (locationId, categoryId, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Home/SearchJob';
    const params = { UserId: userId, locationId: locationId, categoryId: categoryId };

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

