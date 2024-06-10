let linktiles = document.querySelectorAll(".tile.link");
const isApple = ["Mac", "iPad"].some(v => navigator.userAgent.includes(v));

for (tile of linktiles) {
	if (!tile.dataset.goto) {
		tile.classList.add("disable");
		continue;
	}

	tile.firstElementChild.setAttribute("key", (()=>{if (isApple) return "Cmd"; else return "Ctrl";})());

	
	tile.addEventListener("click", function(e) {
		let modKey = false;
		if (isApple) modKey = e.metaKey;
		else modKey = e.ctrlKey;
		
		if (modKey) {
			window.open(tile.dataset.goto, "_blank");
			return;
		}
		window.location.href = tile.dataset.goto;
	});
}