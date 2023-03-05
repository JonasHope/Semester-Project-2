import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const profiles = "/profiles/";
const listings = "/listings/";

const params = new URLSearchParams(document.location.search);
const user = params.get("name");

export async function getProfileListings() {
  const ListingsURL = `${API_SOCIAL_URL}${profiles}${user}${listings}?_seller=true&_bids=true&sort=created&sortOrder=desc`;

  const response = await authFetch(ListingsURL);

  return await response.json();
}
