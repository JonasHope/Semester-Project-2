export function postTemplate(postData) {

    const listing = document.createElement("div")

    listing.innerText = postData.title;

    return listing

}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}