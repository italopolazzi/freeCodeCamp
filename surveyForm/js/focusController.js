import * as functions from './functions.js'

let activated_element;

const handleFocusWhenKeyDown = e => {
    if (e.code === "Space") {
        e.preventDefault()
        e.target.click()
    }
}

const handleFocusWhenKeyUp = e => {
    console.log(e.target)
    const current_element = functions.elementHasXParent('.form-div', e.target)
    console.log({
        current_element
    })
    console.log(
        getComputedStyle(current_element).transform
    )
    if (current_element) {
        if (activated_element && activated_element != current_element) {
            functions.removeTheClassForAll(activated_element)
            // const ct_name = `${activated_element.id}-controller`
            // document.querySelector(`#${ct_name}`).checked = false

            // remover checked aqui
        }
        functions.addTheClassForAll(current_element)
        activated_element = current_element;
    }
}

export default () => {
    window.addEventListener('keydown', e => handleFocusWhenKeyDown(e))
    window.addEventListener('keyup', e => handleFocusWhenKeyUp(e))
}