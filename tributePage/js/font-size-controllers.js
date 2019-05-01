const getChangeFontSizeButtons = () => document.getElementsByName(CHANGE_FONT_SIZE)

const getClickedButtonId = (event) => event.target.id

const setSizeForCSSFontSizeVariable = (size, scale) => document.documentElement.style.setProperty(PAGE_FONT_SIZE, `${size}${scale}`)

const getInitialCSSFontSizeAndScaleValues = () => {
    const rawValue = getInitialCSSFontSizeRawValue()
    return {
        initialFontSize: {
            size: getInitalSize(rawValue),
            scale: getInitialScale(rawValue)
        }
    }
}

const getInitialCSSFontSizeRawValue = () => getComputedStyle(document.documentElement).getPropertyValue(PAGE_FONT_SIZE)

const getInitialScale = (value) => value.match(/\D+$/g)

const getInitalSize = (value) => value.match(/\d+/g)

const calculateNewSizeBasedOnTheMultiplicationFactor = () => {
    return initialFontSize.size * multiplication_factor
}

const getCurrentFontSize = () => {
    return {
        size: calculateNewSizeBasedOnTheMultiplicationFactor(),
        scale: initialFontSize.scale
    }
}

const getUserPreferences = () => {
    return {
        ...getCurrentFontSize(),
        multiplication_factor
    }
}

const setUserPreferences = ({
    size,
    scale,
    multiplication_factor
}) => {
    setSizeForCSSFontSizeVariable(size, scale)
    multiplication_factor = multiplication_factor

}

const increaseFontSize = () => {
    multiplication_factor += PERCENT_OF_CHANGE
    const newSize = calculateNewSizeBasedOnTheMultiplicationFactor()
    setSizeForCSSFontSizeVariable(newSize, initialFontSize.scale)
}

const decreaseFontSize = () => {
    multiplication_factor -= PERCENT_OF_CHANGE
    const newSize = calculateNewSizeBasedOnTheMultiplicationFactor()
    setSizeForCSSFontSizeVariable(newSize, initialFontSize.scale)
}

const initMultiplicationFactor = () => multiplication_factor = 1

const resetFontSize = () => {
    initMultiplicationFactor()
    setSizeForCSSFontSizeVariable(initialFontSize.size, initialFontSize.scale)
}

const PAGE_FONT_SIZE = '--page-font-size'
const INCREASE_FONT_SIZE = 'increaseFontSize'
const RESET_FONT_SIZE = 'resetFontSize'
const DECREASE_FONT_SIZE = 'decreaseFontSize'
const CHANGE_FONT_SIZE = 'changeFontSize'
const PERCENT_OF_CHANGE = 0.1
var multiplication_factor = initMultiplicationFactor()

const {
    initialFontSize
} = getInitialCSSFontSizeAndScaleValues()

const changeFontSize = () => {
    getChangeFontSizeButtons().forEach(button => {
        button.addEventListener('click', (event) => {
            switch (getClickedButtonId(event)) {
                case INCREASE_FONT_SIZE:
                    increaseFontSize()
                    break
                case RESET_FONT_SIZE:
                    resetFontSize()
                    break
                case DECREASE_FONT_SIZE:
                    decreaseFontSize()
                    break
                default:
                    break
            }
        })
    })

}

export {
    changeFontSize,
    getUserPreferences,
    setUserPreferences
}