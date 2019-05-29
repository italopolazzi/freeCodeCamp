const removeFormDivActivatedClass = () => {
    const form_div_activated = document.querySelector('.form-div.activated')
    if (form_div_activated) {
        form_div_activated.classList.remove('activated')
    }
}
const activateTheFormCorrespondingToTheChecked = arg => {
    const form_control_checked = arg instanceof Event ? event.target : arg
    const form_control_value = form_control_checked.value

    // get form-div equivalent by the form_control_value
    const form_div_current = document.getElementById(`form-div-${form_control_value}`)

    // removes the prev activated form
    removeFormDivActivatedClass()

    form_div_current.classList.add('activated')
}

const custorFormController = () => {
    const controls_radios = [...document.querySelectorAll('input[name="form-controls"]')]
    controls_radios.forEach(element => {
        element.addEventListener('click', activateTheFormCorrespondingToTheChecked)
        // element.addEventListener('mousedown', activateTheFormCorrespondingToTheChecked)
    })
}

(() => {
    window.addEventListener('load', () => {
        activateTheFormCorrespondingToTheChecked(document.querySelector('input[name="form-controls"]:checked'))
        custorFormController()
    })
})()