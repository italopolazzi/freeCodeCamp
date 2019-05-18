export default () => {
    window.addEventListener('click', (event) => {
        const el = event.target
        const activator = el.dataset.activator
        if (activator) {
            const obj = document.querySelector(`*[data-object="${activator}"]`)
            obj.classList.contains('activated') ? obj.classList.remove('activated') : obj.classList.add('activated')
        }
    })
}