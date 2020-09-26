export const fetchData = async (url = '') => {
    try {
        const response = await fetch(url)
        if (response.status !== 200) throw new Error('404 Error')
        const data = await response.json()
        // console.log('data', data)
        return data
    } catch(error) {
        // console.log('error', error)
        return Promise.reject(error)
    }
}