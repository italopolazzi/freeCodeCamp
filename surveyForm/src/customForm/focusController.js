import * as functions from './functions.js'
import * as variables from './variables.js'

let activated_element;

const handleFocusWhenKeyDown = e => {
    if (e.code === "Space") {
        e.preventDefault()
        e.target.click()
    }
}

const handleFocus = e => {
    const current_element = functions.elementHasXParent(variables.parent_element, e.target)

    if (current_element) {
        if (activated_element && activated_element != current_element) {
            functions.removeTheClassForAll(activated_element)
        }
        functions.addTheClassForAll(current_element)
        functions.checkRadioButtons()
        activated_element = current_element;
    }
}

export default () => {
    window.addEventListener('keydown', e => handleFocusWhenKeyDown(e))
    const inputs = [...document.querySelectorAll('.custom-form input, .custom-form textarea, .custom-form select')]
    inputs.forEach(input => input.addEventListener('focus', e => handleFocus(e)))
}
