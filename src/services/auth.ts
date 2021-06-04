export const TOKEN_KEY = '@vitrinni_carioca_token-key';

export const isAuthenticated = () => typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) !== null : null;

export const getToken = () => typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;

export const login = token => {
    if (typeof window !== 'undefined') localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    if (typeof window !== 'undefined') localStorage.removeItem(TOKEN_KEY);
};