import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/profiles/";
const listings = "/listings/";
const media = "/media"

const method = "put";

const profileFetch = JSON.parse(localStorage.profile);
const name = profileFetch.name;


export async function getProfile() {

    const profileURL = `${API_SOCIAL_URL}${action}${name}?_listings=true`;

    const response = await authFetch(profileURL)

    return await response.json()
}

export async function getUserListings() {

    const ListingsURL = `${API_SOCIAL_URL}${action}${name}${listings}?_seller=true&_bids=true&sort=created&sortOrder=desc`;

    const response = await authFetch(ListingsURL)

    return await response.json()
}

export async function putNewAvatar(newAvatar) {

    const newAvatarURL = `${API_SOCIAL_URL}${action}${name}${media}`;

    const response = await authFetch(newAvatarURL, {
        method: method,
        body: JSON.stringify(newAvatar)
    })

    return await response.json()
}