import { renderListingsTemplates } from "../templates/index.mjs";
import * as methods from "../api/listings/read.mjs"
import { clearElement } from "./clearFeed.mjs";

const searchbar = document.querySelector('#searchbar');

export async function viewAllListings() {
    searchbar.addEventListener('input', e => {
        const value = e.target.value.toLowerCase()
        let filteredListings = listings.filter(function(listings) {
            return listings.description?.includes(value) || listings.title.includes(value) || listings.tags.includes(value)
        })

        const listingsContainer = document.querySelector('#listingsContainer')

        clearElement(listingsContainer)

        renderListingsTemplates(filteredListings, listingsContainer)
    })


    const listings = await methods.getListings();
    const container = document.querySelector(".listings");
    renderListingsTemplates(listings, container);
    }