export function listingTemplate(listingData) {

    const listing = document.createElement("div");
    const imageContainer = document.createElement("div");
    const imageContent = document.createElement("img");
    const listingContent = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const ends = document.createElement("small");
    
    imageContainer.classList.add("d-flex", "justify-content-center")

    imageContent.setAttribute('src', listingData.media)
    imageContent.setAttribute('onerror', 'this.onerror=null;this.src="https://media.giphy.com/media/idYdfZ9xxVgVPNXjs0/giphy-downsized.gif"');
    imageContent.classList.add("profile-img")

    listing.classList.add("listing", "d-flex", "flex-column", "mb-5");

    listingContent.classList.add("px-3")

    title.innerText = listingData.title;
    title.classList.add("h5")

    description.innerText = listingData.description;

    const countDown = new Date(listingData.endsAt).getTime();
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDown - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        ends.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            ends.innerHTML = '<small class="text-danger"> Time is up! Auction ended.</small>'
        }
    })

    listingContent.appendChild(ends);
    listingContent.appendChild(title);
    listingContent.appendChild(description);
    imageContainer.appendChild(imageContent);
    listing.appendChild(imageContainer);
    listing.appendChild(listingContent);

    return listing

}

export function renderListingsTemplates(postDataList, parent) {
    parent.append(...postDataList.map(listingTemplate))
}