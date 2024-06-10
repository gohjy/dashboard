let linktiles = document.querySelectorAll(".tile.link");
const isApple = ["Mac", "iPad"].some(v => navigator.userAgent.includes(v));
const isPhone = ["iPhone", "Android", "phone", "Phone"].some(v => navigator.userAgent.includes(v));

for (tile of linktiles) {
	if (!tile.dataset.goto) {
		tile.classList.add("disable");
		continue;
	}

	let key = (function() {
		if (isApple) return "Cmd";
		if (isPhone) return false; // check for isApple first as exact user agent string unknown
		return "Ctrl"; // only Apple has cmd key
	})();

	if (!key) continue; // skip adding mod key if mobile
	
	tile.firstElementChild.setAttribute("key", key);

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
