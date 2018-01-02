function restartORstay() {

	var r = confirm("Your chicken will start over from an egg, continue?..");
	if (r == true) {
		parent.location = "http://www.apollondatametrics.com/apps/games/chicken/index.html";
	} else {
		alert('Smart Thinking!');
	}
}
