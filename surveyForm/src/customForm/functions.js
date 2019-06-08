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

export const getTheSelectorByIdToRadioControls = number_id => `input[id="control-${number_id}"]`

const extractTheNumberOfTheParentElementId = id => id.match(/\d+/g)

export const getTheRadioNumberCorrespondingToAnElement = element => {
    const parent_element_id = element.id
    return extractTheNumberOfTheParentElementId(parent_element_id)
}
export const getTheRadioNumberCorrespondingToTheActivatedFormDiv = () => getTheRadioNumberCorrespondingToAnElement(document.querySelector(variables.parent_element_activated))

export const getTheRadioNumberCorrespondingToTheFocusedElement = focused_element => getTheRadioNumberCorrespondingToAnElement(focused_element.closest(variables.parent_element))

export const checkRadioButtons = () => {
    const selector = getTheSelectorByIdToRadioControls(getTheRadioNumberCorrespondingToTheActivatedFormDiv())
    document.querySelector(selector).checked = true
}