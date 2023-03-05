import * as methods from "../api/profile/profile.mjs";
import { renderProfileImgData } from "../templates/navImgTemplate.mjs";

export async function viewProfileImg() {
  const userData = await methods.getProfile();
  const container = document.querySelector("#imgCont");
  renderProfileImgData(userData, container);
}
