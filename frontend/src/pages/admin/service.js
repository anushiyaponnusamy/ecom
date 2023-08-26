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
const uploadImage = async (selectedFile) => {

    const formData = new FormData();
    formData.append('image', selectedFile);
    const response = await axios.post(config.REACT_APP_API + 'uploadImage', formData, { headers });
    return response;

};
const createCategory = async (name) => {

    let response = await axios.post(config.REACT_APP_API + '/category/create-category', { name }, headers);
    return response;
};

const getAllUsers = async () => {

    let response = await axios.get(config.REACT_APP_API + '/auth/getAllUsers', headers);
    return response;
};
export {
    getAllUsers, createCategory, uploadImage
};