import * as methods from "../api/profile/profile.mjs"
import { renderProfileData } from "../templates/profileTemplate.mjs";
const loader = document.querySelector('.loading_icon')

export async function viewProfileInfo() {
    const userData = await methods.getProfile();
    const container = document.querySelector('#profile-container');
    renderProfileData(userData, container)
    loader.classList.add('hide')
}