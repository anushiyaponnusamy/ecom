import axios from "axios";
import config from "../../config";
const accessToken = localStorage.getItem("token");
const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
    },
};

const registerUser = async (email, password, userName, mobile) => {

    let response = await axios.post(config.REACT_APP_API + '/auth/signUp', { email, password, userName, mobile }, headers);
    return response;
};

const loginAPi = async (email, password) => {

    let response = await axios.post(config.REACT_APP_API + '/auth/login', { email, password }, headers);
    return response;
};
export {
    registerUser, loginAPi
};