export function credits(profileData) {

    setTimeout(function() {

        const creditContainer = document.createElement('div')
        const credits = document.querySelector('#bidHeader')

        credits.innerText = 'Available credits:' + ' ' + '£' + ' ' + profileData.credits

        if (profileData.credits === undefined) {
            credits.innerText = 'Login to bid on listing'
        }

        return creditContainer
    }, 3000);
}

export function showCredits(profileData, parent) {
    parent.append(credits(profileData))
}