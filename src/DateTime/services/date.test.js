import getAPIResponse from './dateAPI';
const axios = require('axios');

jest.mock('axios')

test('test', async () => {
    const resp = {
        data: {
            time: "06:10:39 PM",
            date: "10-23-2013"
        }
    }
  axios.mockResolvedValue(resp)
  // axios.mockImplementation(() => Promise.resolve(resp))
  const data = await getAPIResponse()
  expect(data).toEqual({
    time: "06:10:39 PM",
    date: "10-23-2013"
  })
})