import * as flags from './flags.js'

const preventAnchor = (event) => {
    const href = event.target.href
    if (href && /#$/.test(href)) event.preventDefault()
}

export const switchClass = (elements, _class) => {
    elements.forEach(element => {
        element.classList.contains(_class) ? element.classList.remove(_class) : element.classList.add(_class)
    });
}
export const switchClassActivated = (...elements) => {
    switchClass(elements, flags.activated_class_flag)
}

export const removeTheClassForAll = (...elements) => {
    elements.forEach(element => {
        element.classList.remove(flags.activated_class_flag)
    });
}