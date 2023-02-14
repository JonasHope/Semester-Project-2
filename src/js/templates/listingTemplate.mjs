export function specificListingTemplate(listingSpecific) {
    const specificListing = document.createElement('div');
    const svg = document.createElement('div');

    specificListing.innerHTML = 
        `
        <div class="width m-auto">
            <div>
                <h1>${listingSpecific.title}</h1>
            </div>
            <div>
                
            </div>
        </div>
        `

    specificListing.classList.add('bg-light')

    svg.innerHTML = 
        `
        <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
            <path class="layer-fill" d="M0, 30 C200, -10 350, 70 500, 30 L500, 00 L0, 0 Z"></path>
        </svg>
        `
    
    svg.classList.add('bg-white')

        specificListing.appendChild(svg)

    return specificListing;
}

export function renderSpecificListingTemplate(listingSpecific, parent) {
    parent.append(specificListingTemplate(listingSpecific))
}