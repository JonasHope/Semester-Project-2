import { API_SOCIAL_URL } from "../const.mjs";
import * as storage from "../../storage/index.mjs";

const path = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile);
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    });

    const { accessToken, ...user } = await response.json();
    
    storage.save("token", accessToken);

    storage.save("profile", user);

    if (response.ok) {
        alert("You logged in successfully! Click OK to proceed")
        setTimeout(function() {
        window.location.href = `../../pages/listings`;
        }, 1000);
    }   else {
        alert("Invalid email or password, try again.")
        };
};