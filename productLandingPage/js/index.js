import headerController from './headerController.js'
import animationActivator from './animationActivator.js'
import focusController from './focusController.js'

window.addEventListener('load', () => {
    animationActivator()
    headerController()
    focusController()
})