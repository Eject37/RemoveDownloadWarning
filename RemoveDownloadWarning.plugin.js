/**
 * @name RemoveDownloadWarning
 * @version 1.1
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
				document.querySelectorAll('.backdrop-2ByYRN.withLayer-2VVmpp, .layer-fP3xEz').forEach(x => x.remove())
			} catch { }
		}, 1000)

	}
	stop() { }
}