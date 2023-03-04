import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";
import * as methods from "../api/listings/read.mjs"


export async function viewAllListings() {
    const listings = await methods.getListings();
    const container = document.querySelector(".listings");
    renderListingsTemplates(listings, container);

    const noListings = document.querySelector('#noListings')
    if (container.firstChild) {
        noListings.style.display = 'none'
    } else {
        noListings.style.display = 'block'
    }
}
