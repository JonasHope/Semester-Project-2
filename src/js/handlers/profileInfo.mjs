import * as methods from "../api/profile/profile.mjs"
import { renderProfileData } from "../templates/profileTemplate.mjs";

export async function viewProfileInfo() {
    const userData = await methods.getProfile();
    const container = document.querySelector('#profile-container');
    renderProfileData(userData, container)
}