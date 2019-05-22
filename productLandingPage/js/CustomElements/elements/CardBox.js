export default class CardBox extends HTMLElement {
    constructor() {
        super()

        this.innerHTML = `
            <style>
            .box {
                box-shadow: 0 0 3em -1em rgba(0,0,0,0.4);
                position: relative;
            }
            .box > * {
                width: 100%;
            }
            .box,
            .box figure{
                border-radius: 1em;
            }
                .box figure{
                    margin-top: -2em;
                    overflow: hidden;
                    box-shadow: 0 0 3em -1em rgba(0,0,0,0.4);
                }
                .box p {
                    font-size: 2em
                }
                .box-actions{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                }
                .box button {
                    font-weight: bolder;
                    height: auto;
                    border-radius: 1em;
                    padding: 1em 3em;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    border: 0.125em solid currentColor;
                    background: inherit;
                }

            </style>

        `

    }
}