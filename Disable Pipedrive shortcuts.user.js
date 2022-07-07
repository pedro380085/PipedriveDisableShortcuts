// ==UserScript==
// @name         Disable Pipedrive shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Pipedrive sucks and those shortcuts even more.
// @license      MIT
// @author       Pedro Góes
// @include      https://*.pipedrive.tld/*
// @grant        none
// ==/UserScript==

(function() {

  /**
   * Set listeners for shortcut event.
   */
	['keydown', 'keypress', 'keyup'].forEach(function(type) {
		window.addEventListener(type, function(event) {
			console.log(event.target.nodeName);
			console.log(event.type);
			if (event.ctrlKey || event.metaKey) return;
			if (event.target.nodeName != "BODY") return;

			event.stopImmediatePropagation();
			event.preventDefault();

		}, true);
	});

	window.addEventListener('load', function(event) {
		setInterval(function () {
			var visibleBlock = document.getElementsByClassName("cui4-message--visible");
			if (visibleBlock.length > 0) {
				var children = document.getElementsByClassName("cui4-message__close")[0].children;
				console.log(children);
				for (let element of children) {
					element.click();
				}
			}
		}, 2000);
	}, true);
})();