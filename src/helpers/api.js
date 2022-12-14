import Cookies from "js-cookie";
import qs from "qs";
import { doLogout } from "./authHandler";
// const BASEAPI = "http://192.168.129.122:5000";
const BASEAPI = "http://localhost:5000";

const apiFetchFile = async (endpoint, body) => {

    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.append("token", token);
    }

    const response = await fetch(
        BASEAPI + endpoint,

        {
            method: "POST",
            body,
        }
    );

    const json = await response.json();

    if (json.notallowed) {
        doLogout();
        window.location.href = "/signin";
        return;
    }

    return json;
};

const apiFetchPost = async (endpoint, body) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(
        BASEAPI + endpoint,

        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(body),
        }
    );
    const json = await response.json();

    if (json.notallowed) {
        doLogout();
        window.location.href = "/login";
        return;
    }

    return json;
};

const apiFetchPut = async (endpoint, body) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(
        BASEAPI + endpoint,

        {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },

            body: JSON.stringify(body),
        }
    );

    const json = await response.json();

    if (json.notallowed) {
        doLogout();
        window.location.href = "/signin";
        return;
    }

    return json;
};

const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        const token = Cookies.get("token");
        if (token) body.token = token;
    }

    const response = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);

    const json = await response.json();

    if (json.notallowed) {
        window.location.href = "/signin";
        return;
    }

    return json;
};

const API = {
    login: async (email, password) => {
        const json = await apiFetchPost("/user/signin", { email, password });
        return json;
    },

    signup: async (name, email, isAdmin, password) => {
        const json = await apiFetchPost("/user/signup", {
            name,
            email,
            isAdmin,
            password,
        });
        return json;
    },

    getApi: () => {
        return BASEAPI;
    },

    newLinha: async(name) => {
        const json = await apiFetchPost("/linha/new", name);
        return json;
    },

    updateLinha: async(body) => {
        const json = await apiFetchFile("/linha/${id}", body);
        return json;
    },

    getLinhas: async () => {
        const json = await apiFetchGet("/linha/");
        return json;
    },

    newBairro: async(name) => {
        const json = await apiFetchFile("/bairro/new", name);
        return json;
    },

    updateBairro: async(body) => {
        const json = await apiFetchFile("/bairro/${id}", body);
        return json;
    },

    newReferencia: async(body) => {
        const json = await apiFetchFile("/referencia/new", body);
        return json;
    },

    updateReferencia: async(body) => {
        const json = await apiFetchFile("/bairro/${id}", body);
        return json;
    },

    newRota: async(body) => {
        const json = await apiFetchFile("/rota/new", body);
        return json;
    },

    getReferenciasList: async (body) => {
        const json = await apiFetchGet("/referencia/", body);
    }

};

export default  API;