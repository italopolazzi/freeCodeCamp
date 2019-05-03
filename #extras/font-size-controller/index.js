import {
    changeFontSize,
    getUserPreferences,
    setUserPreferences
} from './font-size-controllers.js'
import data from './local-storage.js'


const init = () => {
    loadData()
    changeFontSize()

    

    const lastFontSize = data.getItem('lastFontSize')
    if (lastFontSize) {
        setUserPreferences(lastFontSize)
    }

    window.onbeforeunload = () => {
        data.setItem('lastFontSize', getUserPreferences())
        data.save()
    }
}

const loadData = () => {
data.load()
}

init()