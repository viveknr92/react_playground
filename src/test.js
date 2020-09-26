
    
//create a function take a Object array as input and flat that array to an object.
//example:
//input: [{name:'sam',age:18},{name:'jane',age:10},{name:'john',age:20}]
//ouput: {sam:18,jane:10,john:20}

function foo(input) {
    // implement the logic below
    return input.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.name] : cur.age
        }
    }, {})
  }
  
  // test case
  console.log(
    foo([
      {name: 'sam', age: 18},
      {name: 'jane', age: 10},
      {name: 'john', age: 20},
    ])
  ); // should output {sam:18,jane:10,john:20} in the console