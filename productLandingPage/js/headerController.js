import * as functions from './functions.js'
import * as flags from './flags.js'

const header = document.querySelector("#header")

const nav = document.querySelector("#nav")
const options = document.querySelector("#options")

const nav_controller = document.querySelector("#nav-controller")
const options_controller = document.querySelector("#options-controller")
const close_controller = document.querySelector("#close-controller")

export default () => {
    window.addEventListener('scroll', (e) => {
        functions.removeTheClassForAll(header, nav, options)
    })

    window.addEventListener('click', (e) => {
        if (e.target === nav_controller) {
            functions.switchClassActivated(header, nav)
            options.classList.remove(flags.activated_class_flag)
        } else if (e.target === options_controller) {
            functions.switchClassActivated(header, options)
            nav.classList.remove(flags.activated_class_flag)
        } else if (e.target === close_controller) {
            functions.removeTheClassForAll(header, nav, options)
        }
    })
}