import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/profiles/";
const listings = "/listings/";
const media = "/media"
const bid = "/bids"

const method = "put";

export function userProfile() {
    try {
        const profileFetch = JSON.parse(localStorage.profile);
        const name = profileFetch.name;
        return name
    } catch {
        null
    }
}

const namey = userProfile()


export async function getProfile() {

    const profileURL = `${API_SOCIAL_URL}${action}${namey}?_listings=true`;

    const response = await authFetch(profileURL)

    return await response.json()
}

export async function getUserListings() {

    const ListingsURL = `${API_SOCIAL_URL}${action}${namey}${listings}?_seller=true&_bids=true&sort=created&sortOrder=desc`;

    const response = await authFetch(ListingsURL)

    return await response.json()
}

export async function putNewAvatar(newAvatar) {

    const newAvatarURL = `${API_SOCIAL_URL}${action}${namey}${media}`;

    const response = await authFetch(newAvatarURL, {
        method: method,
        body: JSON.stringify(newAvatar)
    })

    return await response.json()
}

export async function getProfileBiddingHistory() {

    const biddingHistoryURL = `${API_SOCIAL_URL}${action}${namey}${bid}?_listings=true`;

    const response = await authFetch(biddingHistoryURL)

    return await response.json()
}