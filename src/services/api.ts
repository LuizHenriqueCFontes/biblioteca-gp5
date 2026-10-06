import axios from "axios";
import { authStorage } from "../feature/auth/services/authStorage";

export const navigationService = {
    navigate: null as any
}

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    headers:{
        "Content-Type": "application/json"
    },

    timeout: 50000
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

api.interceptors.response.use(
    
    (response) => 
        {return response

    },
    
    (error) => {
        if(error.response?.status === 401){
            console.log("Token expirado");

            authStorage.clear();
        }

        if(error.response?.status === 403) {

            authStorage.clear();

            if(navigationService.navigate) {
                navigationService.navigate("/auth/login", {replace: true});
            }
        }

        return Promise.reject(error);
    }

);