import { createListing } from "../api/listings/create.mjs";

const CreateListingbutton = document.querySelector('.create-listing')
const changeAvatar = document.querySelector('.change-avatar')


export function changeAvatarButton() {
    changeAvatar.onclick = function() {

        const avatarform = document.querySelector('#changeAvatar');

        avatarform.classList.toggle('hide')
    }
}

export function viewForm() {
    CreateListingbutton.onclick = function() {

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

            
            setTimeout(function() {
            location.reload();
            }, 1);
        })
    }
};