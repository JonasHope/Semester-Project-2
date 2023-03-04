export function profileImgDataTemplate(profileData) {

    const profileImgContainer = document.createElement('div')
    const profileImage = document.querySelector('#navImg')

    profileImage.setAttribute('src', `${profileData.avatar}`)
    const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const imgSrc = profileData.avatar
    imgSrc
    ? profileImage.src = imgSrc
    : profileImage.src = defaultImg

    return profileImgContainer
}

export function renderProfileImgData(profileData, parent) {
    parent.append(profileImgDataTemplate(profileData))
}