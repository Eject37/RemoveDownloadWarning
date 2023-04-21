// ==UserScript==
// @name        RemoveDownloadWarning
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description Removes annoying message when trying to download a file
// @author       Eject
// @match        *://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// ==/UserScript==

setInterval(function () {
			document.querySelectorAll('[role=button][rel="noreferrer noopener"][href*=cdn]').forEach(x => {
				if (!x.rel.includes('removed')) {
					x.addEventListener('click', e => {
						e.preventDefault()
						document.querySelectorAll('.layerContainer-2lfOPe').forEach(x => x.remove())
						window.open(x.href)
					})
					x.rel += ' removed'
				}
			})
		}, 1000)