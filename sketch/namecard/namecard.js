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
	var namecard = document.getElementsByTagName("namecard");

	for (var i = 0; i < namecard.length; i++) {
		namecard[i].onclick = function () {
			var href = this.getAttribute("href");
			if (href !== null) window.location = href;
		}
	};
};