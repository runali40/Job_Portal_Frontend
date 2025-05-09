import axios from 'axios';
import UrlData from '../UrlData';
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export const LoginApi = (username, password) => {
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
            console.log("token",response.data.result.outcome.tokens)
            sessionStorage.setItem("sessionid", response.data.result.outcome.sessionId);
            sessionStorage.setItem("userid", response.data.result.data.UserId);
            Cookies.set("UserCredential", response.data.result.outcome.tokens, { expires: 7 });
            toast.success("User Login Successfully!")

            return response.data;
        })
        .catch((error) => {
            console.error('API error:', error);
            return null;
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

export const RegisterApi = (username, password, email, role) => {
    const sessionId = uuidv4();
    const data = {
        um_user_name: username,
        um_password: password,
        um_EmailId: email,
        IpAddress: "192.168.1.4",
        SessionId: sessionId,
        um_roleid: role
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