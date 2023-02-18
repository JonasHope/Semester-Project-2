import displayCountdown from "../ui/countdown.mjs";
import { postBid } from "../api/listings/bid.mjs";

export function specificListingTemplate(listingSpecific) {
    const specificListing = document.createElement('div');
    const listingContainer = document.createElement('div')

    const textContent = document.createElement('div');
    const ends = document.createElement('strong');
    const title = document.createElement('h1');
    const description = document.createElement('p');
    const mediaContainer = document.createElement('div');
    const tags = document.createElement('small');
    const hr = document.createElement('hr');

    const textSeller = document.createElement('div');
    const name = document.createElement('div');
    const email = document.createElement('small');
    const imgContainer = document.createElement('div');
    const avatar = document.createElement('img');

    const svg = document.createElement('div');

    const bidContainer = document.createElement('div');
    const layer = document.createElement('div');

    const bidInputContainer = document.createElement('div');
    const bidHeader = document.createElement('h2');
    const bidContent = document.createElement('div');
    const bidForm = document.createElement('form');
    const bidInput = document.createElement('input');
    const bidButton = document.createElement('button')

    const currentBidsContainer = document.createElement('div');
    const allBids = document.createElement('strong')

    const moreListings = document.createElement('div');
    const moreHr = document.createElement('hr');
    const moreHeader = document.createElement('h3');
    
    // Listing container
    listingContainer.classList.add('bg-white', 'width', 'mx-auto', 'd-flex', 'flex-column', 'flex-sm-row-reverse', 'space-between');

    // Listing content
    textContent.classList.add('col-12', 'col-sm-8', 'd-flex', 'flex-column', 'mx-auto', 'align-items-center', 'align-items-sm-start');

    title.innerText = listingSpecific.title;
    description.innerText = listingSpecific.description;
    tags.innerText = 'Tags: ' + listingSpecific.tags;
    displayCountdown(listingSpecific, ends, specificListing);

    hr.classList.add('w-75')
    description.classList.add('description-width','mt-2', 'w-75')

    mediaContainer.classList.add('slider')

    const selector = document.createElement('div')
    const allMedia = listingSpecific.media;
    const total = allMedia.length
   /* allMedia.map((fetchMedia) => {
        const mediaContent = document.createElement('div');
        const media = document.createElement('img');

        media.setAttribute('src', fetchMedia)
        media.setAttribute("onerror", 'this.onerror=null;this.src="https://media.giphy.com/media/l3V0HSvyvbXrKHmpO/giphy.gif"');
        media.setAttribute('alt', listingSpecific.title)

        media.classList.add( 'rounded-1', 'w-100')
        mediaContent.classList.add('selector-img')

        selector.appendChild(mediaContent)
        mediaContent.appendChild(media);
    })*/
    
    const chooseSlide = document.createElement('div')
    chooseSlide.classList.add('slides')
    chooseSlide.setAttribute('id', 'slides')
    selector.appendChild(chooseSlide)

    for (let count = 0; count < total; count +=1) {
        const selecting = allMedia.slice(count,count+1);
        const sliderDiv = document.createElement("div");
        sliderDiv.id = `selector${(count+1)/1}`;

        sliderDiv.innerHTML = 
        `<a href="#slide${(count+1)/1}">
            <div class="selector-img" style="background-image: url('${selecting}')"</div>
        </div>`

        chooseSlide.appendChild(sliderDiv);
    }
    
    selector.classList.add('d-flex')

    const slides = document.createElement('div')
    slides.classList.add('slides')
    slides.setAttribute('id', 'slides')
    mediaContainer.appendChild(slides)

    for (let count = 0; count < total; count +=1) {
        const slide = allMedia.slice(count,count+1);
        const sliderDiv = document.createElement("div");
        sliderDiv.id = `slide${(count+1)/1}`;

        sliderDiv.innerHTML = 
        `<div class="" name="slider">
            <div class="listing-img" style="background-image: url('${slide}')"</div>
        </div>`

        slides.appendChild(sliderDiv);
    }

    // Seller Content
    textSeller.classList.add('col-12', 'col-sm-4', 'd-flex', 'flex-sm-column', 'justify-content-center','justify-content-sm-start', 'mb-4', 'mb-sm-0', 'mx-auto')
    name.innerHTML = 
        `
        <div class="d-flex flex-sm-column">
            <p class="me-2 my-0">Listing creator:</p>
            <strong class="text-purple m-0">${listingSpecific.seller.name}</strong>
        </div>
        `
    imgContainer.classList.add('d-none','d-sm-block', 'col-sm-4');
    avatar.setAttribute('src', listingSpecific.seller.avatar);
    const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const imgSrc = listingSpecific.seller.avatar
    imgSrc
    ? avatar.src = imgSrc
    : avatar.src = defaultImg
    avatar.setAttribute('alt', listingSpecific.seller.name);
    avatar.classList.add('w-100', 'rounded-4');

    // SVG
    svg.classList.add('bg-white');
    svg.innerHTML = 
        `
        <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
            <path class="layer-fill" d="M0, 30 C200, -10 350, 70 500, 30 L500, 00 L0, 0 Z"></path>
        </svg>
        `;

    // Bidding content
    bidContainer.classList.add('width', 'mx-auto', 'd-flex', 'pt-4', 'flex-column', 'flex-lg-row', 'align-items-center', 'justify-content-lg-between');
    bidInputContainer.classList.add('d-flex', 'align-items-center', 'align-items-sm-start', 'flex-column');

    bidContent.classList.add('d-flex', 'flex-column', 'align-items-center', 'align-items-sm-start');
    bidInput.classList.add('form-control', 'input-width');
    bidButton.classList.add('btn', 'btn-success', 'px-5', 'mt-2');

    bidInput.setAttribute('name', 'amount')
    bidInput.setAttribute('placeholder', 'Enter a bid')
    bidInput.setAttribute('type', 'number')
    bidInput.setAttribute('required','')

    bidHeader.innerText = 'Place a bid'
    bidButton.innerText = 'Bid'

    if (bidForm) {
        bidForm.addEventListener('submit', async (event) => {
            event.preventDefault()

            const formData = new FormData(bidForm)
            const listingbid = Object.fromEntries(formData.entries())
            const amount = parseInt(listingbid.amount)
            const bid = {amount}

            await postBid(bid);

            setTimeout(function() {
            window.location.href = `/pages/specific/?id=${listingSpecific.id}&name=${listingSpecific.seller.name}`
            }, 1);
        })
    }

    currentBidsContainer.appendChild(allBids);
    
    // Fetching bids
	const bids = listingSpecific.bids;
    bids.sort((a,b) => {
        return (b.amount - a.amount)
    })
    bids.map((fetchBids) => {

        const bidsContent = document.createElement('div');
        const bidderName = document.createElement('strong');
        const bidAmount = document.createElement('strong');

        allBids.innerText = 'Current bids'
        bidderName.innerText = fetchBids.bidderName;
        const bidNumber = fetchBids.amount;
        bidAmount.innerHTML =  '<strong>bid:</strong>' + " " + bidNumber + " " + '<img src="/src/icons/gem.svg">'

        bidsContent.classList.add('bidder-card', 'mt-2')
        
        currentBidsContainer.appendChild(bidsContent);
        bidsContent.appendChild(bidderName);
        bidsContent.appendChild(bidAmount);
    })

    layer.classList.add('bg-light')
    currentBidsContainer.classList.add('mt-5', 'mt-lg-0')

    moreListings.classList.add('width', 'mx-auto')
    moreHeader.classList.add('h5', 'text-secondary')
    moreHeader.innerText = `More listings from ${listingSpecific.seller.name}`
	
    specificListing.appendChild(layer);
    specificListing.appendChild(bidContainer);
    specificListing.appendChild(svg);
    specificListing.appendChild(listingContainer);
    specificListing.appendChild(moreListings);

    moreListings.appendChild(moreHr);
    moreListings.appendChild(moreHeader);

    listingContainer.appendChild(textContent);
    listingContainer.appendChild(textSeller);

    textContent.appendChild(title);
    textContent.appendChild(ends);
    textContent.appendChild(description);
    textContent.appendChild(hr);
    textContent.appendChild(tags);
    textContent.appendChild(selector)
    textContent.appendChild(mediaContainer);

    textSeller.appendChild(name);
    textSeller.appendChild(imgContainer);
    textSeller.appendChild(email);

    imgContainer.appendChild(avatar);

    layer.appendChild(bidContainer);

    bidContainer.appendChild(bidInputContainer);
    bidContainer.appendChild(currentBidsContainer);

    bidInputContainer.appendChild(bidHeader);
    bidInputContainer.appendChild(bidContent);

    bidContent.appendChild(bidForm);

    bidForm.appendChild(bidInput);
    bidForm.appendChild(bidButton);

    return specificListing
}

export function renderSpecificListingTemplate(listingSpecific, parent) {
    parent.append(specificListingTemplate(listingSpecific))
}