export function listingTemplate(listingData) {

    const listing = document.createElement("div");

    const listingCard = document.createElement("div");

    const imageContainer = document.createElement("div");
    const imageContent = document.createElement("img");

    const listingContent = document.createElement("div");

    const listingInfo = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const ends = document.createElement("small");

    const creds = document.createElement("div")
    const author = document.createElement("small");
    const hr = document.createElement("hr");
    const bidAmount = document.createElement("strong");

    const viewListing = document.createElement("a")

    listing.setAttribute('id', listingData.id)

    listingCard.classList.add("listing", "d-flex", "flex-column", "justify-content-between", "mb-1")
    
    imageContainer.classList.add("d-flex", "justify-content-center")

    imageContent.setAttribute('src', listingData.media)
    imageContent.setAttribute('onerror', 'this.onerror=null;this.src="https://media.giphy.com/media/l3V0HSvyvbXrKHmpO/giphy.gif"');
    imageContent.classList.add("profile-img")

    listingContent.classList.add("px-3")

    title.innerText = listingData.title;
    title.classList.add("h5")

    description.innerText = listingData.description;

    creds.classList.add("p-3")

    author.innerText = `By: ${listingData.seller.name}`

    hr.classList.add("mt-0")

    const bids = listingData.bids;
    const highestBid = Math.max(...bids.map(winningBid => winningBid.amount))

    bidAmount.innerHTML = '<small class="text-purple">Highest bid:</small>' + ' ' + '<img src="/src/icons/gem.svg">' + ' ' + highestBid
    bidAmount.classList.add("text-center")
    
    if (highestBid < 0) {
        bidAmount.innerHTML = '<small class="text-danger">No bids on listing</small>'
    }

    viewListing.setAttribute('href', `/pages/specific/${listingData.id}`);
    viewListing.innerText = 'View Listing';
    viewListing.classList.add('btn', 'btn-listing', 'mb-5')

        // Count down on listings
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
    }, 1000);

    listingContent.appendChild(imageContainer);

    listingContent.appendChild(listingInfo);
    listingInfo.appendChild(ends);
    listingInfo.appendChild(title);
    listingInfo.appendChild(description);

    creds.appendChild(author);
    creds.appendChild(hr)
    creds.appendChild(bidAmount)

    imageContainer.appendChild(imageContent);

    listingCard.appendChild(listingContent);
    listingCard.appendChild(creds);
    listing.appendChild(listingCard)
    listing.appendChild(viewListing);
    
    return listing

}

export function renderListingsTemplates(postDataList, parent) {
    parent.append(...postDataList.map(listingTemplate))
}