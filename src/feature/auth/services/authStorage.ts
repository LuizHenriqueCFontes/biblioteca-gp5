const TOKEN_KEY = "token";
const USERNAME_KEY = "username";
const ROLE_KEY = "role";

export const authStorage = {
    save: (token: string, username: string, role: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USERNAME_KEY, username);
        localStorage.setItem(ROLE_KEY, role);
    },

    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },

    getUsername: () => {
        return localStorage.getItem(USERNAME_KEY);
    },

    getRole: () => {
        return localStorage.getItem(ROLE_KEY);
    },

    clear: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USERNAME_KEY);
    }
}