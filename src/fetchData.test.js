import { fetchData } from './fetchData';

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}),
//   })
// );

// beforeEach(() => {

//     fetch.mockClear();
// });

test('please call fetchData', async () => {
    const data = await fetchData('https://reqres.in/api/users/2');
    // expect(global.fetch).toBeCalledWith('https://reqres.in/api/users/2')
    expect(data).toStrictEqual({"data":{"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}})
})