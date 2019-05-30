import * as variables from './variables.js'

export const removeTheClassForAll = (...elements) => {
    elements.forEach(element => {
        element.classList.remove(variables.activated_class_flag)
    });
}

export const addTheClassForAll = (...elements) => {
    elements.forEach(element => {
        element.classList.add(variables.activated_class_flag)
    });
}

export const elementHasXParent = (query_selector, event_target) => event_target.closest(query_selector)