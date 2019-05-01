const getChangeFontSizeInputRange = () => document.getElementById(CHANGE_FONT_SIZE)

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
    getChangeFontSizeInputRange().value = multiplication_factor * 100
}

const initMultiplicationFactor = () => multiplication_factor = 1

const PAGE_FONT_SIZE = '--page-font-size'
const CHANGE_FONT_SIZE = 'changeFontSize'
var multiplication_factor = initMultiplicationFactor()

const {
    initialFontSize
} = getInitialCSSFontSizeAndScaleValues()

const getTheMultiplicationFactor = (value) => value/100

const changeFontSize = () => {
    getChangeFontSizeInputRange().addEventListener('change', (event) => {
        multiplication_factor = getTheMultiplicationFactor(event.target.value)
        const newSize = calculateNewSizeBasedOnTheMultiplicationFactor()
        setSizeForCSSFontSizeVariable(newSize, initialFontSize.scale)
    })
}

export {
    changeFontSize,
    getUserPreferences,
    setUserPreferences
}