import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";
import * as methods from "../api/listings/read.mjs"


export async function viewAllListings() {
    const listings = await methods.getListings();
    const container = document.querySelector(".listings");
    renderListingsTemplates(listings, container);
}