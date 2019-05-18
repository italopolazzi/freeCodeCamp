export default () => {

    const nav = document.getElementById("navbar")
    const nav_height = Number.parseInt(getComputedStyle(nav).height)

    const nav_button = document.getElementById("nav-menu-opener")
    const nav_button_transform = getComputedStyle(nav_button).transform

    const switchNavBar = (test) => {
        const pos = ['translateY(-100%)', 'translate(0)']; // const pos = ['translateY(-100%)', 'initial']
        const neg = ['translate(0)', nav_button_transform];
        [nav.style.transform, nav_button.style.transform] = test && true ? pos : neg
    }

    window.addEventListener('scroll', () => {
        switchNavBar(window.scrollY > nav_height)
    })

    nav_button.addEventListener('click', () => {
        switchNavBar(false)
    })
}