import * as functions from './functions.js'
import * as flags from './flags.js'
import {
    elementHasGrandParent
} from './focusController.js'

const header = document.querySelector("#header")

const nav = document.querySelector("#nav-bar")
const options = document.querySelector("#options")

const nav_controller = document.querySelector("#nav-bar-controller")
const options_controller = document.querySelector("#options-controller")

export default () => {
    window.addEventListener('scroll', (e) => {
        console.log(scroll)
        if(scrollY > 5){
            header.classList.add('scroll-activated')
        } else {
            header.classList.remove('scroll-activated')
        }
        functions.removeTheClassForAll(header, nav, options)
    })
    
    window.addEventListener('click', (e) => {
        console.log(elementHasGrandParent(e.target))



        if (e.target === nav_controller) {
            functions.switchClassActivated(header, nav)
            options.classList.remove(flags.activated_class_flag)

        } else if (e.target === options_controller) {
            functions.switchClassActivated(header, options)
            nav.classList.remove(flags.activated_class_flag)

        }
    })
}