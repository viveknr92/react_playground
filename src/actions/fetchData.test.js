import { fetchData, fetchDataWithAxios } from './fetchData';
jest.mock('../__mocks__/fetchDataMock')
// jest.mock('axios')

test('call fetchData', async () => {
    const data = await fetchDataWithAxios('https://reqres.in/api/users/2');
    // expect(global.fetch).toBeCalledWith('https://reqres.in/api/users/2')
    expect(data.email).toBe('janet.weaver@reqres.in')
})