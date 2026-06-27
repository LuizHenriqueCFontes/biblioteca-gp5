import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    headers:{
        "Content-Type": "application/json"
    },

    timeout: 1000000
});

api.interceptors.request.use((config) => {

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGktYmlibGlvdGVjYS1ncDUiLCJzdWIiOiIwMDUxYWU5Ni01M2JiLTQ0NTItODJkZC02YjA2YTY0ZTU0OTEiLCJyb2xlIjpbIkFETUlOIl0sImV4cCI6MTc4MjU3NjU5NX0.S7ek4roPjxlm1K_W0ZySTlvr0VK3u_GwkqkjxA4oRao");

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
        }

        return Promise.reject(error);
    }

);