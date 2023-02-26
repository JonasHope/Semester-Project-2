import displayCountdown from "../ui/countdown.mjs";

export function listingTemplate(listingData) {
	const listing = document.createElement("a");

	const listingCard = document.createElement("div");

	const imageContainer = document.createElement("div");
	const imageContent = document.createElement("div");

	const listingContent = document.createElement("div");

	const listingInfo = document.createElement("div");
	const title = document.createElement("h2");
	const description = document.createElement("p");
	const ends = document.createElement("small");

	const creds = document.createElement("div");
	const author = document.createElement("small");
	const hr = document.createElement("hr");
	const bidAmount = document.createElement("strong");

	listing.setAttribute("href", `/pages/specific/?id=${listingData.id}&name=${listingData.seller.name}`);
	listing.setAttribute("id", listingData.id);
	listing.classList.add("mb-5", "listingCard", "d-flex", "flex-column", "align-items-center", "text-decoration-none", "text-primary");

	listingCard.classList.add("listing", "d-flex", "flex-column", "mb-1", "justify-content-between", "mx-2");

	imageContainer.classList.add("d-flex", "justify-content-center");

	imageContent.setAttribute("style", `background-image: url(${listingData.media[0]})`);
	imageContent.setAttribute("alt", listingData.title);
	imageContent.classList.add("listing-img");

	listingContent.classList.add("px-3");

	title.innerText = listingData.title;
	title.classList.add("h5");

	description.innerText = listingData.description;

	creds.classList.add("p-3");

	author.innerText = `By: ${listingData.seller.name}`;

	hr.classList.add("mt-0");

	const bids = listingData.bids;
	const highestBid = Math.max(...bids.map((winningBid) => winningBid.amount));

	bidAmount.innerHTML = '<small class="text-purple">Highest bid:</small>' + " " + '<img src="/src/icons/gem.svg">' + " " + highestBid;
	bidAmount.classList.add("text-center", "bg-light", "p-2", 'border-fix');

	if (highestBid < 0) {
		bidAmount.innerHTML = '<small class="text-danger">No bids on listing</small>';
	}

	displayCountdown(listingData, ends, listing);

	listingContent.appendChild(imageContainer);

	listingContent.appendChild(listingInfo);
	listingInfo.appendChild(ends);
	listingInfo.appendChild(title);
	listingInfo.appendChild(description);

	creds.appendChild(hr);
	creds.appendChild(author);

	imageContainer.appendChild(imageContent);
	imageContent.appendChild(bidAmount);

	listingCard.appendChild(listingContent);
	listingCard.appendChild(creds);
	listing.appendChild(listingCard);

	return listing;
}

export function renderListingsTemplates(listingDataList, parent) {
	parent.append(...listingDataList.map(listingTemplate));
}