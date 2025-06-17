import axios from 'axios';
import UrlData from '../UrlData';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import ErrorHandler from '../ErrorHandler';
import { apiClient } from '../ApiClient';
// import ErrorHandler from '../ErrorHandler';

export const LoginApi = (username, password, navigate) => {
    const sessionId = uuidv4();
    const data = {
        username: username,
        password: password,
        IpAddress: "192.168.1.4",
        SessionId: sessionId,
    };
    const url = 'Auth';
    return axios({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
            console.log("token", response.data.result.outcome.tokens)
            sessionStorage.setItem("sessionid", response.data.result.outcome.sessionId);
            sessionStorage.setItem("userid", response.data.result.data.UserId);
            sessionStorage.setItem("rolename", response.data.result.data.r_rolename);
            sessionStorage.setItem("currentIndustry", response.data.result.data.CurrentIndustry)
            sessionStorage.setItem("roleId", response.data.result.data.r_id)
            sessionStorage.setItem("companyId", response.data.result.data.CompanyId)
            Cookies.set("UserCredential", response.data.result.outcome.tokens, { expires: 7 });
            toast.success("User Login Successfully!")
            navigate("/home")
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
            if (error.response.status === 400) {
                toast.error("Invalid username or password");
            }
            // const errors = ErrorHandler(error);
            // toast.error(errors);
        });
};

export const GetRoleApi = () => {
    const sessionId = uuidv4();
    const params = {
        IpAddress: "192.168.1.4",
        SessionId: sessionId,
    };

    const url = 'Auth/GetRole';
    return axios({
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
            return null;
        });
};

export const RegisterApi = (username, password, email, role, companyName, companyWebsite, companyLogo) => {
    const sessionId = uuidv4();
    const data = {
        um_user_name: username,
        um_password: password,
        um_EmailId: email,
        companyName: companyName,
        IpAddress: "192.168.1.4",
        SessionId: sessionId,
        um_roleid: role,
        companyWebsite: companyWebsite,
        companyLogo: companyLogo
    };

    const url = 'UserMaster/Insert';
    return axios({
        method: 'post',
        url: UrlData + url,
        data: data,
    })
        .then((response) => {
            console.log('API response:', response);
            toast.success("User Register Successfully!")
            return response.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            return null;
        });
};

export const ChangePasswordApi = async (oldPassword, newPassword, navigate) => {
    const userId = sessionStorage.getItem('userid');
    const url = 'Auth/ChangePassword';
    const data = { UserId: userId, oldPassword: oldPassword, newPassword: newPassword };

    try {
        const response = await apiClient({
            method: 'post',
            url: url,
            data: data,
        });

        console.log(response.data.data, "change password");
        toast.success("Changed Password Successfully!");
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

export const EmpDashboardApi = async (navigate) => {
    const userId = sessionStorage.getItem('userid');
    const roleName = sessionStorage.getItem('rolename');
    const url = 'EmpDashboard/GetEmpDashboard';
    const params = { UserId: userId, RoleName: roleName };

    try {
        const response = await apiClient({
            method: 'get',
            url: url,
            params: params,
        });

        console.log(response.data.data, "emp dashboard");
        // toast.success("Changed Password Successfully!");
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

