export function credits(profileData) {

    setTimeout(function() {

        const creditContainer = document.createElement('div')
        const credits = document.querySelector('#bidHeader')

        credits.innerText = 'Available credits:' + '£' + profileData.credits

        return creditContainer
    }, 1);
}

export function showCredits(profileData, parent) {
    parent.append(credits(profileData))
}