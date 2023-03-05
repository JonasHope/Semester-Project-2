import * as methods from "../api/profile/profile.mjs";
import { renderBiddingData } from "../templates/biddingHistoryTemplate.mjs";

export async function viewBiddingHistory() {
  const userData = await methods.getProfileBiddingHistory();
  const container = document.querySelector("#bidListings");
  renderBiddingData(userData, container);
}
