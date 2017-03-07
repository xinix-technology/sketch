/*!
 * Sketch - Namecard
 * sketch.xinix.co.id
 *
 * Available under the Apache license
 */

/*
 * Namecard is modern tag to describe a namecard like data
 *
 * Authors        Dwan
 * Contributors   Dwan
 */

"use strict";

window.onload = function() {
	var namecard = document.getElementsByTagName("namecard"),
		className = "hover";
		console.log(namecard);
	for (var i = 0; i < namecard.length; i++) {
		namecard[i].onclick = function () {
			var href = this.getAttribute("href");
			if (href !== null) window.location = href;
		}
		namecard[i].onmouseover = function(e) {
			if (this.getAttribute("href") !== null) {
				if (this.classList) this.classList.add(className);
				else this.className += ' ' + className;
			}
		};
		namecard[i].onmouseout = function(e) {
			if (this.getAttribute("href") !== null) {
				if (this.classList) this.classList.remove(className);
				else this.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
	};
};