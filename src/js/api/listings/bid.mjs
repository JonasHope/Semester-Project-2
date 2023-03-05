import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/listings";
const bids = "/bids/";
const method = "post";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");

export async function postBid(bidData) {
  const listingBidUrl = `${API_SOCIAL_URL}${action}/${id}${bids}`;

  const response = await authFetch(listingBidUrl, {
    method: method,
    body: JSON.stringify(bidData),
  });

  return await response.json();
}
