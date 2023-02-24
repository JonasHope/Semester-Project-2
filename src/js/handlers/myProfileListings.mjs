import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";
import * as methods from "../api/profile/profile.mjs"


export async function viewUserListings() {
    const listings = await methods.getUserListings();
    const container = document.querySelector("#profile-listings");
    renderListingsTemplates(listings, container);
}