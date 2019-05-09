export default () => {
    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach(item => {
        const img = item.querySelector('.img-container img')
        if (img) {
            const img_height = img.height
            const img_width = img.width

            if (img_height > img_width) {
                item.classList.add('timeline-portrait')

            } else if (img_height < img_width) {
                item.classList.add('timeline-landscape')

            } else if (img_height == img_width) {
                item.classList.add('timeline-landscape')
            }
        }
    })
}