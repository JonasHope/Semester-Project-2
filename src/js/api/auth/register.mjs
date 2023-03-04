import { API_SOCIAL_URL } from "../const.mjs";

const path = "/auth/register"
const method = "post";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile);
    
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()

    if (response.ok) {
        alert("You registered successfully! Click OK to login")
        setTimeout(function() {
        window.location.href = `../../pages/login`;
        }, 1000);
    } else {
        alert("The input values seems to be invalid, Please try again..")
    }

    return(result)
}