import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { viewAllListings } from "./handlers/listings.mjs";
import { searchForListing } from "./handlers/search.mjs";
import { viewSpecificListing } from "./handlers/listing.mjs";

switch(location.pathname) {
    case "/":
    case "/index.html":
        regFormListener();
        loginFormListener();
        break;
    case "/pages/listings/index.html":
    case "/pages/listings/":
        viewAllListings();
        searchForListing();
        break;
    case "/pages/specific/index.html":
    case "/pages/specific/":
        viewSpecificListing();
}