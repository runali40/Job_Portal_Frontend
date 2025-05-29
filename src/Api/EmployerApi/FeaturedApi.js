import ErrorHandler from "../../ErrorHandler";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiClient } from "../../ApiClient";
import Cookies from 'js-cookie';

export const FeaturedJobApi = async (Id, newStatus, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/FeaturedJobupdate';
    const data = { UserId: userId, id: Id, featured: newStatus };

    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            data: data,
        });

        console.log(response.data.data, "featured job api");

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

export const GetFeaturedApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Employeer/GetFeatures';
    const params = { UserId: userId };

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