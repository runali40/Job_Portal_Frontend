import ErrorHandler from "../../ErrorHandler";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { apiClient } from "../../ApiClient";
import Cookies from 'js-cookie';

export const VerifyPayment = async (navigate) => {
    // const userId = sessionStorage.getItem('userid');
    const orderId = sessionStorage.getItem('orderid')
    const amount = sessionStorage.getItem('amount')
    const companyId = sessionStorage.getItem('amount')
    const url = 'Payments/verify';
    const data = { orderId: orderId, paymentId: amount, signature: "abc" , CompanyId: companyId};

    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            data: data,
        });
        console.log(response, "verify data")
        console.log(response.data, "verify 21")
        console.log(response.data.data, "get view notification data");

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

export const CreateOrderApi = async (amount, duration, uId, rId, cId, navigate) => {
    // const userId = sessionStorage.getItem('userid');
    const url = 'Payments/create-order';
    const data = { amount: amount, duration: duration, planName: "premium", userId: uId, roleId: rId, companyId: cId }
    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            data: data,
        });

        console.log(response.data, "get create order data");
        sessionStorage.setItem("orderid", response.data.orderId)
        sessionStorage.setItem('amount', response.data.amount)
        sessionStorage.setItem('companyId', response.data.companyid)
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