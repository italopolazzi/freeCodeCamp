export default () => {
    var i = 0;

    const update = (elem_window) => {
        i++
        let value = 10 * i;
        elem_window.scrollTo(0, value)
    }

    const upAndDown = (iframes) => {
        requestAnimationFrame(upAndDown)

        document.querySelectorAll('#projects iframe').forEach(iframe => {
            const frame_window = iframe.contentWindow
            update(frame_window)
        })
    }

    upAndDown()
}