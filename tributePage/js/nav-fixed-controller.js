export default () => {
    const navElement = document.getElementById('nav');
    window.addEventListener('scroll', (event) => {
        const navHeight = navElement.offsetHeight;
        if (window.pageYOffset >= navHeight) {
            navElement.setAttribute('class', 'nav-fixed');
        } else {
            navElement.removeAttribute('class', 'nav-fixed');
        }
    })
}