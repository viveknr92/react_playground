import axios from "axios"

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

export const fetchDataWithAxios = async (url = '') => {
    console.log('Fetching data ......')
    try {
        const response = await axios(url)
        console.log('response', response.data.data)
        return response.data.data
    } catch(error) {
        return Promise.reject(error)
    }
}