const USERNAME_KEY = "username";
const EMAIL_KEY = "email";
const PHONE_KEY = "phone";

export const registerStorage = {
    save: (username: string, email: string, phone: string) => {
        sessionStorage.setItem(USERNAME_KEY, username);
        sessionStorage.setItem(EMAIL_KEY,  email);
        sessionStorage.setItem(PHONE_KEY, phone);
    },

    getUsername: () => {
        sessionStorage.getItem(USERNAME_KEY);
    },

    getEmail: () => {
        sessionStorage.getItem(EMAIL_KEY);
    },

    getPhone: () => {
        sessionStorage.getItem(PHONE_KEY);
    },

    clear: () => {
        sessionStorage.removeItem(USERNAME_KEY);
        sessionStorage.removeItem(EMAIL_KEY);
        sessionStorage.removeItem(PHONE_KEY);
    }
}