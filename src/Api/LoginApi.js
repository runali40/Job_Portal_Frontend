import axios from 'axios';
import UrlData from '../UrlData';
import { v4 as uuidv4 } from 'uuid';

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
        um_roleid : role
    };

    const url = 'UserMaster/Insert';
    return axios({
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