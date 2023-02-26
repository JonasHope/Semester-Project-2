import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
    const createPostURL = API_SOCIAL_URL + action;
    listingData.tags = listingData.tags.split(",").filter(Boolean)
    const response = await authFetch(createPostURL, {
        method: method,
        body: JSON.stringify(listingData)
    })

    if (response.ok) {
        return await response.json()
    } else {
        alert("Something went wrong, probably invalid media URL. Please try again")
    }
}