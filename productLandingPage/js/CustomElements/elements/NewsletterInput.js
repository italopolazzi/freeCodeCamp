export default class NewsletterInput extends HTMLDivElement {
    constructor(){
        super()

        this.innerHTML = `
        <div class="email col-xs10 col-sm6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quas fugit, iste doloremque
                    voluptates
                    numquam! Nam, aperiam animi, autem harum doloribus id quis voluptates nulla a minus placeat,
                    architecto
                    repudiandae!
                    <input type="text">
                </div>
        `

    }
}