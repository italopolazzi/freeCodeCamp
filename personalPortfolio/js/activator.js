export default () => {

    const switchActivator = (el) => {
        el.classList.contains('activated') ? el.classList.remove('activated') : el.classList.add('activated')
    }

    window.addEventListener('click', (event) => {
        const el = event.target
        const activator = el.dataset.activator
        if (activator) {
            const obj = document.querySelector(`*[data-object="${activator}"]`)

            switchActivator(obj)
            switchActivator(el)
        }
    })
}