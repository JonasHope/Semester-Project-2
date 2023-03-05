export function navFix() {
  const login = document.querySelector("#navLogin");
  const logout = document.querySelector("#navLogout");
  const listing = document.querySelector("#navListing");
  const profile = document.querySelector("#navProfile");
  const profileFetch = JSON.stringify(localStorage.profile);

  if (profileFetch === undefined) {
    logout.classList.add("hide");
    listing.classList.add("hide");
    profile.classList.add("hide");
  } else {
    login.classList.add("hide");
  }

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();

    setTimeout(function () {
      location.reload();
    }, 1);
  });
}
