import customForm from './customForm/customForm.js'

const alternateClass = (elem, css_class) => elem.classList.contains(css_class) ? elem.classList.remove(css_class) : elem.classList.add(css_class)

const alternateClasses = (elem, css_classes) => {
    if (elem.classList.contains(css_classes[0])) {
        elem.classList.add(css_classes[1])
        elem.classList.remove(css_classes[0])
    } else if (elem.classList.contains(css_classes[1])) {
        elem.classList.add(css_classes[0])
        elem.classList.remove(css_classes[1])
    }
}
const alternateIconMenu = (icon_container) => {
    alternateClasses(icon_container, ['mdi-dots-vertical', 'mdi-close'])
}
const buttonMaxMin = (event, attribute) => {
    const input_number = event.target.closest('.input').querySelector('input[type=number]')
    if (input_number) {
        const input_attribute_value = input_number.getAttribute(attribute)
        input_number.value = input_attribute_value
    }
}
const buttonClear = event => {
    const input = event.target.closest('.input').querySelector('input')
    if (input) {
        input.value = ''
    }
}

const buttonMenu = event => {
    const input_menu = event.target.closest('.button.menu')

    const icon = input_menu.querySelector('i.mdi')
    // console.log({icon, input_menu})
    alternateIconMenu(icon)

    const input_options = input_menu.closest('.input-container').querySelector('.input-options')
    if (input_options) {
        alternateClass(input_options, 'activated')
    }
}

(() => {
    customForm()


    // buttons max and min for numbers input 
    const max_number_button = document.querySelectorAll('.button.max')
    const min_number_button = document.querySelectorAll('.button.min')
    const clear_button = document.querySelectorAll('.button.clear')
    const menu_button = document.querySelectorAll('.button.menu')

    max_number_button.forEach(btn => btn.addEventListener('click', e => buttonMaxMin(e, 'max')))
    min_number_button.forEach(btn => btn.addEventListener('click', e => buttonMaxMin(e, 'min')))
    clear_button.forEach(btn => btn.addEventListener('click', buttonClear))
    menu_button.forEach(btn => btn.addEventListener('click', buttonMenu))

    // clear button


})()