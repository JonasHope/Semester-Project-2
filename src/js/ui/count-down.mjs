export default function diplayCountdown(listingData, container, parentContainer) {
	// Count down on listings
	const countDown = new Date(listingData.endsAt).getTime();
	const x = setInterval(function () {
		const now = new Date().getTime();
		const distance = countDown - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		container.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
		container.classList.add("text-green");

		if (distance < 0) {
			clearInterval(x);
			container.innerHTML = '<small class="text-danger"> Time is up! Auction ended.</small>';
			parentContainer.classList.add("hide");
		}
	}, 1000);
}