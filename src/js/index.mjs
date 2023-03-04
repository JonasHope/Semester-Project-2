import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { viewAllListings } from "./handlers/listings.mjs";
import { searchForListing } from "./handlers/search.mjs";
import { viewSpecificListing } from "./handlers/listing.mjs";
import { viewProfileListings } from "./handlers/profileListings.mjs";
import { viewProfileInfo } from "./handlers/profileInfo.mjs";
import { viewUserListings } from "./handlers/myProfileListings.mjs";
import { updateAvatarURL } from "./handlers/changeAvatar.mjs";
import { viewForm } from "./handlers/createListing.mjs";
import { createListingForm } from "./handlers/createListing.mjs";
import { changeAvatarButton } from "./handlers/createListing.mjs";
import { viewProfileImg } from "./handlers/profileImgNav.mjs";
import { showCreditAmount } from "./handlers/displayCredits.mjs";
import { navFix } from "./handlers/nav.mjs";
import { closeLoader } from "./ui/loader.mjs";

switch(location.pathname) {
    case "/":
    case "./":
    case "/index.html":
    case "./index.html":
    case "/Semester-Project-2/index.html":
    case "/Semester-Project-2/./index.html":
    case "/Semester-Project-2/":
    case "/Semester-Project-2/./":
        viewProfileImg()
        navFix()
        break;
    case "/pages/login/index.html":
    case "./pages/login/index.html":
    case "/pages/login/":
    case "./pages/login/":
    case "/Semester-Project-2/pages/login/":
    case "/Semester-Project-2/./pages/login/":
    case "/Semester-Project-2/pages/login/index.html":
    case "/Semester-Project-2/./pages/login/index.html":
        loginFormListener();
        break;
    case "/pages/register/index.html":
    case "./pages/register/index.html":
    case "/pages/register/":
    case "./pages/register/":
    case "/Semester-Project-2/pages/register/":
    case "/Semester-Project-2/./pages/register/":
    case "/Semester-Project-2/pages/register/index.html":
    case "/Semester-Project-2/./pages/register/index.html":
        regFormListener();
        break;
    case "/pages/listings/index.html":
    case "/pages/listings/":
    case "./pages/listings/index.html":
    case "./pages/listings/":
    case "/Semester-Project-2/pages/listings/index.html":
    case "/Semester-Project-2/pages/listings/":
    case "/Semester-Project-2/./pages/listings/index.html":
    case "/Semester-Project-2/./pages/listings/":
        viewAllListings();
        searchForListing();
        viewProfileImg()
        navFix()
        closeLoader()
        break;
    case "/pages/specific/index.html":
    case "/pages/specific/":
    case "./pages/specific/index.html":
    case "./pages/specific/":
    case "/Semester-Project-2/pages/specific/index.html":
    case "/Semester-Project-2/pages/specific/":
    case "/Semester-Project-2/./pages/specific/index.html":
    case "/Semester-Project-2/./pages/specific/":
        viewSpecificListing();
        viewProfileListings();
        viewProfileImg()
        showCreditAmount()
        navFix()
        break;
    case "/pages/profile/index.html":
    case "/pages/profile/":
    case "./pages/profile/index.html":
    case "./pages/profile/":
    case "/Semester-Project-2/pages/profile/index.html":
    case "/Semester-Project-2/pages/profile/":
    case "/Semester-Project-2/./pages/profile/index.html":
    case "/Semester-Project-2/./pages/profile/":
        viewProfileInfo();
        viewUserListings();
        updateAvatarURL();
        viewForm()
        createListingForm()
        changeAvatarButton()
        viewProfileImg()
        navFix()
}