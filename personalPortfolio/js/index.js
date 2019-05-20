import darkMode from './darkMode.js'
import iframeAdjusts from './iframeAdjusts.js'
// import iframeUpAndDown from './iframeUpAndDown.js'
import navBarController from './navBarController.js'
import activator from './activator.js'

const objectToSVG = () => {
    const svgs = document.querySelectorAll('.svg')
    console.log(svgs);

    svgs.forEach(svg => console.log(svg.contentDocument))
    
}

(() => {
    darkMode()
    iframeAdjusts()
    // iframeUpAndDown()
    navBarController()
    activator()
    objectToSVG()
})()