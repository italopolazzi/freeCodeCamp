export default () => {
    // window.addEventListener('keyup', () => {
    //     const form_div = document.activeElement.closest('.form-div')
    //     console.log(form_div)
    // })


    window.addEventListener('click', () => {

        const form_div = document.querySelector(':invalid')
        // const form_div = document.activeElement.closest('.form-div')
        // console.log(form_div)
    })

    // document.getElementById('submit').addEventListener('click', () => {
    //     setTimeout(() => {
    //         console.log("ES")
    //         const form_div = document.activeElement.closest('.form-div')
    //         console.log(form_div)
    //     }, 3000);
    // })


    const inputs = [...document.querySelectorAll('.custom-form input')]
    inputs.forEach(input => input.addEventListener('focus', () => {
        const form_div = document.activeElement.closest('.form-div')
    }))
    // console.log(inputs)
}