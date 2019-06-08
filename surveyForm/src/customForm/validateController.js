import * as functions from './functions.js'
import * as variables from './variables.js'

export default () => {
    const inputs = [...document.querySelectorAll('.custom-form input, .custom-form textarea, .custom-form select')]
    const form_divs = [...document.querySelectorAll(variables.parent_element)]

    document.querySelector('#submit').onclick = () => {
        // add style error to the containers of invalids fields
        inputs.forEach(input => {
            const container = input.closest('.input-container, fieldset')
            if (input.checkValidity()) {
                container.classList.remove('error')
            } else {
                container.classList.add('error')
            }
        })

        // add error style to radio input which represents the corresponding form div
        form_divs.forEach(div => {
            // get the corresponding form div
            const div_number = functions.getTheRadioNumberCorrespondingToAnElement(div)
            const radio_control_selector = functions.getTheSelectorByIdToRadioControls(div_number)
            const radio_control = document.querySelector(radio_control_selector)

            const radio_symbol_class_list = radio_control.parentNode.querySelector('.symbol').classList
            // search for invalid fields children
            div.querySelector('.input-container.error, fieldset.error') ? radio_symbol_class_list.add('error') : radio_symbol_class_list.remove('error')

        })



    }
}