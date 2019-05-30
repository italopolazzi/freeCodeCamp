import focusController from './focusController.js'
import * as variables from './variables.js'

const removeFormDivActivatedClass = () => {
    const parent_element_activated = document.querySelector(variables.parent_element_activated)
    if (parent_element_activated) {
        parent_element_activated.classList.remove(variables.activated_class_flag)
    }
}
const activateTheFormCorrespondingToTheChecked = arg => {
    const form_control_checked = arg instanceof Event ? event.target : arg
    const form_control_value = form_control_checked.value

    // get form-div equivalent by the form_control_value
    const parent_element_current = document.getElementById(`form-div-${form_control_value}`)

    // removes the prev activated form
    removeFormDivActivatedClass()

    parent_element_current.classList.add(variables.activated_class_flag)
}

const initListeners = () => {
    const controls_radios = [...document.querySelectorAll('input[name="form-controls"]')]
    controls_radios.forEach(element => {
        element.addEventListener('click', activateTheFormCorrespondingToTheChecked)
        // element.addEventListener('mousedown', activateTheFormCorrespondingToTheChecked)
    })
}

export default () => {
    window.addEventListener('load', () => {
        activateTheFormCorrespondingToTheChecked(document.querySelector('input[name="form-controls"]:checked'))

        initListeners()
        focusController()
    })
}