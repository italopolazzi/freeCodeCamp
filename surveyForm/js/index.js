const execute = () => {
    const form_control_checked = event.target
    const form_control_value = form_control_checked.value

    // get form-div equivalent by the form_control_value
    const form_div_activated = document.querySelector('.form-div.activated')
    const form_div_current = document.getElementById(`form-div-${form_control_value}`)

    if (form_div_activated) {
        form_div_activated.classList.remove('activated')
    }
    form_div_current.classList.add('activated')
}
const custorFormController = () => {
    const controls_radios = [...document.querySelectorAll('input[name="form-controls"]')]
    controls_radios.forEach(element => element.addEventListener('click', execute))
}

(() => {
    window.addEventListener('load', () => {
        custorFormController()
    })
})()