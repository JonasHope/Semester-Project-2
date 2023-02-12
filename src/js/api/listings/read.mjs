import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/listings";

export async function getListings() {

    const ListingsURL = `${API_SOCIAL_URL}${action}?_seller=true&_bids=true`;

    const response = await authFetch(ListingsURL)

    return await response.json()
}

export async function getListing(id) {
    if (!id) {
    throw new Error("To get a post, a postID is required")
    }

    const listingURL = `${API_SOCIAL_URL}${action}${id}`;

    const response = await authFetch(listingURL)

    return await response.json()
}