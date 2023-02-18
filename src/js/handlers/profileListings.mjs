import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";
import * as methods from "../api/listings/userListings.mjs"


export async function viewProfileListings() {
    const listings = await methods.getProfileListings();
    const container = document.querySelector("#profileListings");
    renderListingsTemplates(listings, container);
}