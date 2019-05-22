export default () => {
    const activator_flag = 'data-animation-activator'
    const object_flag = 'data-animation-object'
    const class_flag = 'animation-activated'
    const min_distance = 10

    const getActivators = () => {
        return document.querySelectorAll(`*[${activator_flag}]`)
    }
    
    const getObjects = () => {

    }

    const activators = getActivators()

    window.addEventListener('scroll', () => {
        getActivators().forEach(activator => {
            if (activator.getBoundingClientRect().y < min_distance) {
                activator.classList.add(class_flag)
            }
        })
    })
}