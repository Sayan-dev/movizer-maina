import TOKEN from "const";

function authenticate(token) {

    localStorage.setItem(TOKEN, token);
}

function isAuth() {
    return localStorage.getItem(token);
}