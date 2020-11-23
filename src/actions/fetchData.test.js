import { fetchData, fetchDataWithAxios } from './fetchData'
import axios from 'axios'

jest.mock('axios')

test('call fetchData', async () => {
    const resp = {
        data: {
            data: { 
                email: 'janet.weaver@reqres.in'
            }
        }
    }
    axios.mockResolvedValue(resp)
    const URL = 'https://reqres.in/api/users/2'
    const data = await fetchDataWithAxios(URL)
    expect(axios).toHaveBeenCalledWith(URL)
    expect(axios).toHaveBeenCalledTimes(1)
    expect(data.email).toBe('janet.weaver@reqres.in')
})