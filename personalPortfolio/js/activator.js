export default () => {

    const preventAnchor = (event) => {
        const href = event.target.href
        if (href && /#$/.test(href)) event.preventDefault()
    }

    const switchActivator = (el) => {
        el.classList.contains('activated') ? el.classList.remove('activated') : el.classList.add('activated')
    }

    window.addEventListener('click', (event) => {
        preventAnchor(event)

        const el = event.target
        const activator = el.dataset.activator
        if (activator) {
            const obj = document.querySelector(`*[data-object="${activator}"]`)

            switchActivator(obj)
            switchActivator(el)
        }
    })
}