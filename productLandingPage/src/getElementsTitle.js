const circles_container = document.querySelector('#circles-container')
const links_container = document.querySelector('#links-container')

const execute = (e) => {
    const img_container = e.target.closest('.img-container')
    if (img_container) {
        circles_container.classList.add('activated')
        const anchor = img_container.querySelector('a')
        links_container.textContent = anchor['title']
    } else {
        circles_container.classList.remove('activated')
    }
}
export default () => {
    window.addEventListener('mouseover', execute)
    window.addEventListener('keydown', execute)
}