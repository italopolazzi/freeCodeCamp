import * as functions from './functions.js'
import * as flags from './flags.js'

export default () => {
    let prev_grand_parent;
    window.addEventListener('keydown', (e) => {
        if (e.code === "Space") {
            e.preventDefault()
            e.target.click()
        }
    })
    window.addEventListener('keyup', (e) => {
        const grand_parent = e.target.closest('[grand_parent]')
        if (grand_parent) {
            if (prev_grand_parent && prev_grand_parent != grand_parent) {
                functions.removeTheClassForAll(prev_grand_parent)
            }
            functions.addTheClassForAll(grand_parent)
            prev_grand_parent = grand_parent;
        }
    })
}