const data = {
    setItem: (item, value) => data[item] = value,
    getItem: (item) => data[item],
    save: () => {
        if (!localStorage) throw new Errow("Your browser does not support local storage")

        Object.keys(data).forEach(key => {
            const value = JSON.stringify(data[key])
            localStorage.setItem(key, value)
        })
    },
    load: () => {
        if (!localStorage) throw new Errow("Your browser does not support local storage")
        Object.keys(localStorage).forEach(key => {
            try {
                const value = JSON.parse(localStorage[key])
                data.setItem(key, value)
            } catch (error) {
                console.error(error);
            }
        })
    }
}

export default data