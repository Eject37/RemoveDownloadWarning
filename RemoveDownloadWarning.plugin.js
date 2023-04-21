/**
 * @name RemoveDownloadWarning
 * @version 1.0
 * @description Removes annoying message when trying to download a file
 * @author Eject
 *  
 */

module.exports = class Example {

	load() { }
	start() {

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

	}
	stop() { }
}