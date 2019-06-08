import * as flags from './flags.js'

export const focusFirstOrLastChild = (element, flag = 'first') => {
    const query = `
    a[href]:not([tabindex='-1']),
    area[href]:not([tabindex='-1']),
    input:not([disabled]):not([tabindex='-1']),
    select:not([disabled]):not([tabindex='-1']),
    textarea:not([disabled]):not([tabindex='-1']),
    button:not([disabled]):not([tabindex='-1']),
    iframe:not([tabindex='-1']),
    [tabindex]:not([tabindex='-1']),
    [contentEditable=true]:not([tabindex='-1'])
    `

    let focusable_children = element.querySelectorAll(query)
    if (focusable_children) {
        focusable_children = [...focusable_children]

        if (flag === 'lastf') {
            focusable_children.slice(-1)[0].focus()
        } else if (flag === 'first') {
            focusable_children[0].focus()
        } else {
            throw new Error('Invalid flag')
        }
    }
}

export const focusFirstChild = (element) => {
    focusFirstOrLastChild = (element, 'first')
}

export const focusLastChild = (element) => {
    focusFirstOrLastChild = (element, 'last')
}

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