
import axios from "axios";
import API from "../url";

export const singUpAxios = async (values) => {
    try {
        const response = await axios({
            url: `${API}/users/signup`,
            method: "post",
            data: values
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyEmailAxios = async (params) => {
    try {
        const response = await axios({
            url: `${API}/users/verifyemail/${params}`,
            method: "get"
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const passResetAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/users/resetpassword`,
            method: "post",
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const checkString = async (data) => {
    try {
        const response = await axios({
            url: `${API}/users/resetpassword/${data}`,
            method: "get"
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const changePassAxios = async (data, string) => {
    try {
        const response = await axios({
            url: `${API}/users/changepassword/${string}`,
            method: "post",
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/users/login`,
            method: "post",
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyTokenAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/users/verifyToken`,
            method: "get",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const settingsAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/email/settings`,
            method: "post",
            data: data,
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCredential = async () => {
    try {
        const response = await axios({
            url: `${API}/email/getCredential`,
            method: "get",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sendEmailToRecepiantAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/email/sendEmails`,
            method: "post",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            },
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteCredentials = async () => {
    try {
        const response = await axios({
            url: `${API}/email/deleteCred`,
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getLogDetails = async () => {
    try {
        const response = await axios({
            url: `${API}/email/getLogDetailsData`,
            method: "get",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const graphDataAxios = async (data) => {
    try {
        const response = await axios({
            url: `${API}/email/getGraphData`,
            method: "post",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            },
            data: data
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMailsCountAxios = async () => {
    try {
        const response = await axios({
            url: `${API}/email/getMailSendToday`,
            method: "get",
            headers: {
                "x-auth-token": localStorage.getItem("x-Auth-token"),
                'user': localStorage.getItem("user")
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

