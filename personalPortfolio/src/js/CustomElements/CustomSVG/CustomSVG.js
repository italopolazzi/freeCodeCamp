import items from './items.js'

class CustomSVG extends HTMLElement {
    constructor() {
        super()

        const svg = this.getAttribute('svg')

        if (!items.hasOwnProperty(svg)) throw Error('Invalid SVG key')

        this.innerHTML = items[svg]
    }
}

export default () => {
    customElements.define('custom-svg', CustomSVG)
}