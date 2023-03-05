export function profileDataTemplate(profileData) {
  const profileContainer = document.createElement("div");

  const profileImage = document.querySelector("#profile-img");
  const name = document.querySelector("#name");
  const credits = document.querySelector("#credits");
  const activeListings = document.querySelector("#active-listings");
  const won = document.querySelector("#won");

  // Profile info
  profileImage.setAttribute("src", `${profileData.avatar}`);
  const defaultImg =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const imgSrc = profileData.avatar;
  imgSrc ? (profileImage.src = imgSrc) : (profileImage.src = defaultImg);

  name.innerText = profileData.name;
  credits.innerText = profileData.credits;
  activeListings.innerText = profileData._count.listings;
  won.innerText = profileData.wins.length;

  return profileContainer;
}

export function renderProfileData(profileData, parent) {
  parent.append(profileDataTemplate(profileData));
}
