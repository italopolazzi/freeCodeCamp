const activated_class_flag = "activated"

const switchClass = (elements, _class) => {
    elements.forEach(element => {
        element.classList.contains(_class) ? element.classList.remove(_class) : element.classList.add(_class)
    });
}
const switchClassActivated = (...elements) => {
    switchClass(elements, activated_class_flag)
}

const removeTheClassForAll = (...elements) => {
    elements.forEach(element => {
        element.classList.remove(activated_class_flag)
    });
}

const header = document.querySelector("#header")

const nav = document.querySelector("#nav")
const options = document.querySelector("#options")

const nav_controller = document.querySelector("#nav-controller")
const options_controller = document.querySelector("#options-controller")
const close_controller = document.querySelector("#close-controller")

export default () => {
    window.addEventListener('scroll', (e) => {
        removeTheClassForAll(header, nav, options)
    })

    window.addEventListener('click', (e) => {
        if (e.target === nav_controller) {
            switchClassActivated(header, nav)
            options.classList.remove(activated_class_flag)
        } else if (e.target === options_controller) {
            switchClassActivated(header, options)
            nav.classList.remove(activated_class_flag)
        } else if (e.target === close_controller) {
            removeTheClassForAll(header, nav, options)
        }
    })
}