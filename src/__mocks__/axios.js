const get = () => {
  console.log("Mocking axios")
  return Promise.resolve({
    data: {
      data: { 
          email: 'janet.weaver@reqres.in'
        }
      }
    })
}
export default get