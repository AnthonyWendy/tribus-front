import Cookies from "js-cookie";

export const isLogged = () => {
    const token = Cookies.get("token");
    if (token) return true;
    return false;
};

export const doLogin = (token, rememberPassword = false) => {
    Cookies.set("token", token, { expires: rememberPassword ? 365 : 1 });
};

export const doLogout = () => {
    Cookies.remove("token");
};
