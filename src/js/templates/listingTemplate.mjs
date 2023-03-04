import displayCountdown from "../ui/count-down.mjs";
import { postBid } from "../api/listings/bid.mjs";

export function specificListingTemplate(listingSpecific) {
    const specificListing = document.createElement('div');
    const listingContainer = document.createElement('div')

    const textContent = document.createElement('div');
    const listingText = document.createElement('div');
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

    const bidContainer = document.createElement('div');
    const layer = document.createElement('div');

    const allBidsContainer = document.createElement('div')
    const bidInputContainer = document.createElement('div');
    const bidHeader = document.createElement('h2');
    const bidContent = document.createElement('div');
    const bidForm = document.createElement('form');
    const bidInput = document.createElement('input');
    const bidButton = document.createElement('button')
    const bidError = document.createElement('span')

    const currentBidsContainer = document.createElement('div');
    const allBids = document.createElement('strong')

    specificListing.classList.add('width', 'mx-auto', 'd-flex', 'justify-content-center', 'flex-column')
    
    // Listing container
    listingContainer.classList.add('d-flex', 'flex-column-reverse');

    // Listing content
    textContent.classList.add( 'd-flex', 'flex-column','align-items-center' , 'align-items-md-start');
    listingText.classList.add('d-flex', 'flex-column', 'col-12', 'col-md-6')

    title.innerText = listingSpecific.title;
    description.innerText = listingSpecific.description;
    tags.innerText = listingSpecific.tags;
    displayCountdown(listingSpecific, ends, specificListing);

    tags.classList.add('mb-2', 'text-purple')
    hr.classList.add('w-100', 'light-p')
    description.classList.add('mt-2')
    mediaContainer.classList.add('d-flex', 'mediaContainer', 'col-12', 'col-md-8')

    const fetchMedia = listingSpecific.media;

    fetchMedia.map((listingImages) => {
        const mediaItem = document.createElement('div')
        const mediaImg = document.createElement('div')

        mediaImg.setAttribute('style', `background-image: url(${listingImages})`)
        mediaImg.classList.add('listing-img', 'm-1')

        mediaItem.appendChild(mediaImg);
        mediaContainer.appendChild(mediaItem);
    })

    // Seller Content
    name.innerText = listingSpecific.seller.name

    textSeller.classList.add('d-flex', 'mb-5', 'mt-3', 'align-items-center')
    name.classList.add('text-purple', 'fw-bold', 'mx-2')
    imgContainer.classList.add('col-1', 'avatarContainer');
    avatar.classList.add('avatarImg',);

    avatar.setAttribute('src', listingSpecific.seller.avatar);
    avatar.setAttribute('alt', listingSpecific.seller.name);

    const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const imgSrc = listingSpecific.seller.avatar
    imgSrc
    ? avatar.src = imgSrc
    : avatar.src = defaultImg

    // Bidding content
    bidContainer.classList.add('mt-5', 'd-flex','flex-column');
    bidInput.classList.add('input-fix', 'input-width');
    bidButton.classList.add('btn', 'btn-primary', 'px-5', 'ms-md-2', 'mt-2', 'mt-md-0');
    bidForm.classList.add('d-flex', 'flex-column', 'input-width', 'flex-md-row')
    bidHeader.classList.add('h6', 'mx-2')

    bidInput.setAttribute('id', 'bidInput')

    const bids = listingSpecific.bids;
	const highestBid = Math.max(...bids.map((winningBid) => winningBid.amount));

    bidInput.setAttribute('name', 'amount')
    bidInput.setAttribute('value', `${highestBid + 1}`)
    bidInput.setAttribute('placeholder', 'Enter bid here..')
    bidInput.setAttribute('type', 'number')
    bidInput.setAttribute('required','')

    bidInput.classList.add('bg-light-p')
    bidError.classList.add('text-red', 'px-3', 'hide')

    bidError.innerText = 'The bid has to be higher than' + ' ' + highestBid

    bidInput.addEventListener('input', (e) => {
        e.preventDefault()
        if (bidInput.value <= highestBid) {
            bidInput.classList.remove('bg-light-p')
            bidInput.classList.add('bg-red')
            bidError.classList.remove('hide')
        } else { 
            bidInput.classList.remove('bg-red')
            bidInput.classList.add('bg-light-p')
            bidError.classList.add('hide')
        }
    })

    bidHeader.setAttribute('id', 'bidHeader')
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
            location.reload();
            }, 1);
        })
    }

    currentBidsContainer.appendChild(allBids);
    
    // Fetching bids
    
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
        bidAmount.innerHTML =  '<strong>£</strong>' + " " + bidNumber

        const winner = Math.max(...bids.map((winningBid) => winningBid.amount));

        if (bidNumber === winner) {
            bidsContent.classList.add('bg-green')
        }

        bidsContent.classList.add('bidder-card', 'mt-2')
        allBids.classList.add('h4')
        
        currentBidsContainer.appendChild(allBidsContainer)
        allBidsContainer.appendChild(bidsContent);
        bidsContent.appendChild(bidderName);
        bidsContent.appendChild(bidAmount);
    })

    layer.classList.add('bg-light')
    allBidsContainer.classList.add('d-flex', 'flex-column', 'col-12', 'col-md-6')
    currentBidsContainer.classList.add('mt-5')

    // More listings by <name> section.listing
    const moreListingsTitle = document.querySelector('#moreListingsTitle');
    moreListingsTitle.innerHTML = `All listings from ${listingSpecific.seller.name}`;

    // Appends >>
	
    specificListing.appendChild(listingContainer);
    specificListing.appendChild(layer);
    specificListing.appendChild(bidContainer);

    listingContainer.appendChild(textContent);
    listingContainer.appendChild(textSeller);

    textContent.appendChild(listingText)
    textContent.appendChild(mediaContainer)

    listingText.appendChild(title);
    listingText.appendChild(ends);
    listingText.appendChild(hr);
    listingText.appendChild(description);
    listingText.appendChild(tags)

    textSeller.appendChild(imgContainer);
    textSeller.appendChild(name);
    textSeller.appendChild(email);

    imgContainer.appendChild(avatar);

    layer.appendChild(bidContainer);

    bidContainer.appendChild(bidInputContainer);
    bidContainer.appendChild(currentBidsContainer);

    bidInputContainer.appendChild(bidHeader);
    bidInputContainer.appendChild(bidContent);

    bidContent.appendChild(bidForm);

    bidForm.appendChild(bidInput);
    bidContent.appendChild(bidError)
    bidForm.appendChild(bidButton);

    return specificListing
}

export function renderSpecificListingTemplate(listingSpecific, parent) {
    parent.append(specificListingTemplate(listingSpecific))
}