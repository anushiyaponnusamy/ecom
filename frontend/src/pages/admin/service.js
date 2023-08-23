import axios from "axios";
import config from "../../config";
const accessToken = localStorage.getItem("token");
const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: accessToken,
    },
};


const getAllUsers = async () => {

    let response = await axios.get(config.REACT_APP_API + '/auth/getAllUsers', headers);
    return response;
};
export {
    getAllUsers
};