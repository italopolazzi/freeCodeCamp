import * as functions from './functions.js'
import * as flags from './flags.js'

let prev_grand_parent;
const header = document.querySelector("#header")

const controlFocusWhenKeyDown = e => {
    if (e.code === "Space") {
        e.preventDefault()
        e.target.click()
    }
}

export const elementHasGrandParent = event_target => event_target.closest('[grand_parent]')

const controllFocusWhenKeyUp = e => {
    const grand_parent = elementHasGrandParent(e.target)
    if (grand_parent) {
        if (prev_grand_parent && prev_grand_parent != grand_parent) {
            functions.removeTheClassForAll(prev_grand_parent)
            const ct_name = `${prev_grand_parent.id}-controller`
            document.querySelector(`#${ct_name}`).checked = false
        }
        functions.addTheClassForAll(grand_parent)
        prev_grand_parent = grand_parent;
    }
}

export default () => {
    window.addEventListener('keydown', e => controlFocusWhenKeyDown(e))
    window.addEventListener('keyup', e => controllFocusWhenKeyUp(e))
}