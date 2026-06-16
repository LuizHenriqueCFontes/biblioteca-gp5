import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

    headers:{
        "Content-Type": "application/json"
    },

    timeout: 1000000
});

api.interceptors.request.use((config) => {

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhcGktYmlibGlvdGVjYS1ncDUiLCJzdWIiOiIxMTNiY2IzNC00ODU1LTQyOGQtODJlMy1hYzBiYWUzMmI1ZjkiLCJyb2xlIjpbIkFETUlOIl0sImV4cCI6MTc4MTU3NjgxMX0.clvJ8iCSR3XwsONk8csvzvmQjcnrfyL4aBtkvHUTpwU");

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