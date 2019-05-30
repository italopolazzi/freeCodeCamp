import * as flags from './flags.js'

export const preventAnchor = (event) => {
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

export const addTheClassForAll = (...elements) => {
    elements.forEach(element => {
        element.classList.add(flags.activated_class_flag)
    });
}

export const elementHasXParent = (query_selector, event_target) => event_target.closest(query_selector)