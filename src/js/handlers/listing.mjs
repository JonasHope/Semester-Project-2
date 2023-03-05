import * as methods from "../api/listings/read.mjs";
import { renderSpecificListingTemplate } from "../templates/listingTemplate.mjs";
const loader = document.querySelector(".loading_icon");

export async function viewSpecificListing() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");
  const listing = await methods.getListing(id);
  const container = document.querySelector("#specificListing");
  renderSpecificListingTemplate(listing, container);
  loader.classList.add("hide");
}
