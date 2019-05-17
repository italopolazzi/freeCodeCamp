export default () => {
    const dark_mode_checkbox = document.getElementById("dark-mode");
    const body_classes = document.body.classList;

    const alternateDarkMode = (event) => {
        event.target.checked ? body_classes.add('dark') : body_classes.remove('dark')
    }

    dark_mode_checkbox.checked = document.body.classList.contains('dark')
    dark_mode_checkbox.addEventListener('change', alternateDarkMode)
}