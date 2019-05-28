import shapeContainers from './shapeContainers.js'
import getElementsTitle from './getElementsTitle.js'
import headerController from './headerController.js'
import animationActivator from './animationActivator.js'
import focusController from './focusController.js'

(() => {
    shapeContainers()
    getElementsTitle()
    window.addEventListener('load', () => {

        animationActivator()
        headerController()
        focusController()
    })
})()