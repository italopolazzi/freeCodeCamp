import * as functions from './functions.js'
import * as variables from './variables.js'

let activated_element;

const handleFocusWhenKeyDown = e => {
    if (e.code === "Space") {
        e.preventDefault()
        e.target.click()
    }
}
const checkTheRadioCorrespondingToTheForm = () =>{
    const parent_element_id = document.querySelector(variables.parent_element_activated).id
    const parent_element_id_number = parent_element_id.match(/\d+/g)
    
    const query = `input[id="control-${parent_element_id_number}"]`
    document.querySelector(query).checked = true
}

const handleFocusWhenKeyUp = e => {
    const current_element = functions.elementHasXParent(variables.parent_element, e.target)

    if (current_element) {
        if (activated_element && activated_element != current_element) {
            functions.removeTheClassForAll(activated_element)
        }
        functions.addTheClassForAll(current_element)
        checkTheRadioCorrespondingToTheForm()
        activated_element = current_element;
    }
}

export default () => {
    window.addEventListener('keydown', e => handleFocusWhenKeyDown(e))
    window.addEventListener('keyup', e => handleFocusWhenKeyUp(e))
}