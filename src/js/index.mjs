import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === './index.html' || path === './') {
    regFormListener();
    loginFormListener();
}