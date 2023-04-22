/**
 * @name RemoveDownloadWarning
 * @version 1.2
 * @description Removes annoying message when trying to download a file
 * @author Eject
 *  
 */

module.exports = class Example {

	load() { }
	start() {

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
		}, 1000)

	}
	stop() { }
}