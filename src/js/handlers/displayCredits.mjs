import * as methods from "../api/profile/profile.mjs"
import { credits } from "../ui/credits.mjs";

export async function showCreditAmount() {
    const userData = await methods.getProfile();
    const container = document.querySelector('#bidHeader');
    credits(userData, container)
}