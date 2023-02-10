import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { viewAllListings } from "./handlers/Listings.mjs";

switch(location.pathname) {
    case "/":
    case "/index.html":
        regFormListener();
        loginFormListener();
        break;
    case "/pages/listings/index.html":
    case "/pages/listings/":
        viewAllListings();
}