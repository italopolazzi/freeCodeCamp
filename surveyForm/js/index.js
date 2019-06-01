import customForm from './customForm/customForm.js'

const buttonMaxMin = (event, attribute) => {
    const input_number = event.target.parentNode.querySelector('input[type=number]')
    const input_attribute_value = input_number.getAttribute(attribute)
    input_number.value = input_attribute_value
}

(() => {
    customForm()


    const max_number_buttons = document.querySelectorAll('.button.max')
    const min_number_buttons = document.querySelectorAll('.button.min')

    max_number_buttons.forEach(btn => btn.addEventListener('click', e => buttonMaxMin(e, 'max')))
    min_number_buttons.forEach(btn => btn.addEventListener('click', e => buttonMaxMin(e, 'min')))
    
})()