import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { viewAllListings } from "./handlers/listings.mjs";
import { searchForListing } from "./handlers/search.mjs";
import { viewSpecificListing } from "./handlers/listing.mjs";
import { viewProfileListings } from "./handlers/profileListings.mjs";
import { viewProfileInfo } from "./handlers/profileInfo.mjs";
import { viewUserListings } from "./handlers/myProfileListings.mjs";
import { updateAvatarURL } from "./handlers/changeAvatar.mjs";


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
        viewProfileListings();
        break;
    case "/pages/profile/index.html":
    case "/pages/profile/":
        viewProfileInfo();
        viewUserListings();
        updateAvatarURL();
 
}