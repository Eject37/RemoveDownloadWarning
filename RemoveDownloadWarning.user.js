// ==UserScript==
// @name        RemoveDownloadWarning
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description Removes annoying message when trying to download a file
// @author       Eject
// @match        *://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

setInterval(function () {
			try {
				document.querySelectorAll('[role=button][rel="noreferrer noopener"][href*=http]').forEach(x => {
					x.addEventListener('click', e => {
						e.preventDefault()
						window.open(x.href)
					})
					x.rel += ' removed'
				})
				document.querySelectorAll('.layer-fP3xEz').forEach(x => {
					if (x.querySelector(".art-3yfHpl") !== null) {
						document.querySelector('.backdrop-2ByYRN.withLayer-2VVmpp').click()
					}
				})
			} catch { }
		}, 200)