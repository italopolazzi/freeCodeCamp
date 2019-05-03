export default () => {
    // alert("BK")
    const navElement = document.getElementById('nav');
    // console.log(navElement);

    window.addEventListener('scroll', (event) => {
        const navHeight = navElement.offsetHeight;

        // console.log(navHeight);
        // console.log(window.pageYOffset);

        if (window.pageYOffset >= navHeight) {
            navElement.style.position = 'fixed';
            // console.log("fixou");
            
        } else {
            navElement.style.position = 'initial';
            // console.log("não");
        }

    })

}