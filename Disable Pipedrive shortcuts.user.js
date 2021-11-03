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
  ['keydown', 'keypress', 'keyup'].forEach(function(type){
    window.addEventListener(type, function(event) {
      console.log(event.target.nodeName);
      console.log(event.type);
      if (event.target.nodeName == "BODY") {
          event.stopImmediatePropagation();
          event.preventDefault();
          //return false;
      }
    }, true);
  });
})();