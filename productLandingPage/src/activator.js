import * as functions from './functions.js'

export default () => {
    window.addEventListener('click', (event) => {
        functions.preventAnchor(event)

        const el = event.target
        const activator = el.dataset.activator
        if (activator) {
            const obj = document.querySelector(`*[data-object="${activator}"]`)

            switchClassActivated(obj)
            switchClassActivated(el)
        }
    })
}