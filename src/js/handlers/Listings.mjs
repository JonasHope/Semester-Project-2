import { renderPostTemplates } from "../templates/index.mjs";
import * as methods from "../api/listings/read.mjs"

export async function viewAllListings() {

    const posts = await methods.getListings();
    const container = document.querySelector(".listings");
    renderPostTemplates(posts, container);
    }