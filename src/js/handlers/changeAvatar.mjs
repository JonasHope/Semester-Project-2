import {putNewAvatar} from "../api/profile/profile.mjs";

const form = document.querySelector('#changeAvatar')

export async function updateAvatarURL() {

    if (form) {
        
        form.addEventListener('submit', async (event) => {
            event.preventDefault()

            const formData = new FormData(form)
            const newAvatar = Object.fromEntries(formData.entries())

            await putNewAvatar(newAvatar)

            setTimeout(function() {
            location.reload();
            }, 1);
        })
    }
}