const TOKEN_KEY = "token";
const USERNAME_KEY = "username";

export const authStorage = {
    save: (token: string, username: string) => {
        localStorage.setItem(TOKEN_KEY, token);
        localStorage.setItem(USERNAME_KEY, username);
    },

    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },

    getUsername: () => {
        return localStorage.getItem(USERNAME_KEY);
    },

    clear: () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USERNAME_KEY);
    }
}