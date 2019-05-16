export default () => {
    const iframes = document.querySelectorAll('#projects iframe')
    // console.log(iframes)

    iframes.forEach(iframe => {
        const frame_document = iframe.contentWindow.document
        const frame_style = frame_document.createElement('style')
        frame_style.type = 'text/css'
        frame_style.rel = 'stylesheet'
        frame_style.innerHTML = 'body,nav,main{overflow: hidden}'
        console.log(frame_style)
        frame_document.head.appendChild(frame_style)
    })

}