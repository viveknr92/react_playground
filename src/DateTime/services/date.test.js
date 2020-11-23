import getAPIResponse from './dateAPI';
import axios from 'axios'

jest.mock('axios')

test('test', async () => {
    const resp = {
        data: {
            time: "06:10:39 PM",
            date: "10-23-2013"
        }
    }
  axios.mockResolvedValue(resp)
  const DATE_JSON_URL = 'https://jsonmock.hackerrank.com/datetime'
  // axios.mockImplementation(() => Promise.resolve(resp))
  const data = await getAPIResponse()
  expect(axios).toHaveBeenCalledWith(DATE_JSON_URL)
  expect(axios).toHaveBeenCalledTimes(1)
  expect(data).toEqual({
    time: "06:10:39 PM",
    date: "10-23-2013"
  })
})