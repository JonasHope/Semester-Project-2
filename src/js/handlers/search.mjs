import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";
import * as methods from "../api/listings/read.mjs";
import { clearElement } from "./clearFeed.mjs";

const searchbar = document.querySelector("#searchbar");

export async function searchForListing() {
  searchbar.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    let filteredListings = listings.filter(function (listings) {
      return (
        listings.description?.toLowerCase().includes(value) ||
        listings.title.toLowerCase().includes(value) ||
        listings.tags.includes(value) ||
        listings.seller.name.toLowerCase().includes(value)
      );
    });

    const listingsContainer = document.querySelector("#listingsContainer");

    clearElement(listingsContainer);
    console.clear();

    renderListingsTemplates(filteredListings, listingsContainer);

    const noListings = document.querySelector("#noListings");
    if (listingsContainer.firstChild) {
      noListings.style.display = "none";
    } else {
      noListings.style.display = "block";
    }
  });
  const listings = await methods.getListings();
}
