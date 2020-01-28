import axios from "axios";

const url = process.env.REACT_APP_API_URL;

const AxiosService = axios.create({
    baseURL: url,
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },

    validateStatus: status => {
        return status < 500;
    }
});

AxiosService.interceptors.response.use(
    resp => {
        if (![200, 201].includes(resp.status)) {
            return Promise.reject(resp.data)
        } else {
            return Promise.resolve(resp.data)
        }
    },
    err => {
        return Promise.reject(err)
    }
);

export default AxiosService;
