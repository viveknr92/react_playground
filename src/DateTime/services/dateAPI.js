import axios from 'axios'
const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime'

const getAPIResponse = async () => {
	// console.log(axios)
	const res = await axios(DATE_JSON_URL)
	return res.data
}

export default getAPIResponse
