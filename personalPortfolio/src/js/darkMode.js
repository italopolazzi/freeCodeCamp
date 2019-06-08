export default () => {

    const dark_flag = 'dark'
    const dark_element_id = 'dark-mode'

    const storage = window.localStorage;

    const dark_mode_checkbox = document.getElementById(dark_element_id);
    const body_classes = document.body.classList;

    const alternate = test => {
        try {
            storage.setItem(dark_flag, test)
        } catch (error) {

        }
        test ? addDarkFlag() : removeDarkFlag()
    }

    const addDarkFlag = () => {
        body_classes.add(dark_flag)
    }
    const removeDarkFlag = () => {
        body_classes.remove(dark_flag)
    }
    const init = () => {
        let saved_as_dark, saved_as_dark_parsed;
        try {
            saved_as_dark = storage.getItem(dark_flag)
            saved_as_dark_parsed = JSON.parse(saved_as_dark)
        } catch (error) {

        }
        dark_mode_checkbox.checked = saved_as_dark ? saved_as_dark_parsed : saved_as_dark_parsed || document.body.classList.contains(dark_flag)
        alternate(dark_mode_checkbox.checked)
    }


    init()
    dark_mode_checkbox.addEventListener('change', e => alternate(e.target.checked))
}