"use strict";

window.onload = function() {
	var link = document.querySelectorAll("aside a");

	for (var i = 0; i < link.length; i++) {
		link[i].onclick = function () {
			var href = this.getAttribute("href");
			if (href !== null) document.getElementById("content").src = href;

			return false;
		}
	};
}
