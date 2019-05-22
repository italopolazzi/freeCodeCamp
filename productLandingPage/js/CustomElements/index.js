import CardBox from './elements/CardBox.js'
import NewsletterInput from './elements/NewsletterInput.js'

export default () => {
    customElements.define('card-box', CardBox)
    customElements.define('newsletter-input', NewsletterInput, {
        extends: 'div'
    })
}