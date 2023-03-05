export function profileBiddingTemplate(bidding) {
  const biddingHistoryContainer = document.createElement("div");
  const allBiddings = bidding;
  const biddingCountContainer = document.querySelector("#bidsOn");
  const bidsCount = bidding.length;

  biddingCountContainer.innerText = bidsCount;

  allBiddings.map((fetch) => {
    const bids = document.createElement("a");
    const bidsName = document.createElement("strong");
    const bidsAmount = document.createElement("strong");
    const ends = document.createElement("p");

    const timeLeft = fetch.listing.endsAt;
    const fixedTime = timeLeft.substring(0, 10);

    bidsName.innerText = fetch.listing.title;
    bidsAmount.innerText = fetch.amount;
    ends.innerText = fixedTime;

    bids.classList.add(
      "d-flex",
      "justify-content-between",
      "px-2",
      "py-3",
      "bidHistoryElements",
      "text-primary",
      "text-decoration-none"
    );
    bidsName.classList.add("col-4", "d-flex", "justify-content-start", "mb-0");
    bidsAmount.classList.add(
      "col-4",
      "d-flex",
      "justify-content-center",
      "mb-0"
    );
    ends.classList.add("col-4", "d-flex", "justify-content-end", "mb-0");

    bids.setAttribute(
      "href",
      `/Semester-Project-2/pages/specific/?id=${fetch.listing.id}`
    );

    biddingHistoryContainer.appendChild(bids);
    bids.appendChild(bidsName);
    bids.appendChild(bidsAmount);
    bids.appendChild(ends);
  });

  return biddingHistoryContainer;
}

export function renderBiddingData(bidding, parent) {
  parent.append(profileBiddingTemplate(bidding));
}
