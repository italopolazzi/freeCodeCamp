export default () => {
    const iframes = document.querySelectorAll('#projects iframe')

    iframes.forEach(iframe => {
        const frame_window = iframe.contentWindow
        const frame_document = frame_window.document
        
        const frame_style = frame_document.createElement('style')
        frame_style.type = 'text/css'
        frame_style.rel = 'stylesheet'
        frame_style.innerHTML = 'body,nav,main{overflow: hidden}'
        
        frame_document.head.appendChild(frame_style)
    })

}