/*!
 * Sketch - Grid
 * sketch.xinix.co.id
 *
 * Available under the Apache license
 */

/*
 * Grid is modern tag to describe a grid like data
 *
 * Authors        Dwan
 * Contributors   Dwan
 */

"use strict";

window.onload = function() {
	var grid = document.getElementsByTagName("s-grid"),
		className = "hover";

	for (var i = 0; i < grid.length; i++) {
		grid[i].onclick = function () {
			var href = this.getAttribute("href");
			if (href !== null) window.location = href;
		}
		grid[i].onmouseover = function(e) {
			if (this.getAttribute("href") !== null) {
				if (this.classList) this.classList.add(className);
				else this.className += ' ' + className;
			}
		};
		grid[i].onmouseout = function(e) {
			if (this.getAttribute("href") !== null) {
				if (this.classList) this.classList.remove(className);
				else this.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
	};
};