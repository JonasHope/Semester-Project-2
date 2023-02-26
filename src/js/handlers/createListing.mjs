import { createListing } from "../api/listings/create.mjs";

const button = document.querySelector('.create-listing')

export function viewForm() {
    button.onclick = function() {

        const form = document.querySelector('#target');
        const heading = document.querySelector('#listingsHeader')

        form.classList.toggle('hide')
        heading.classList.toggle('hide')
    }
}

export function createListingForm() {
    const form = document.querySelector("#target");
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const listingData = Object.fromEntries(formData.entries())

            await createListing(listingData)
        })
    }
};