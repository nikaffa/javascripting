//make a request using fetch api
//that creates a promise and returns it
fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  console.log('resolved', response);
  return response.json(); //returns a promise, and we get the data back using json method
}).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log('rejected', error);
});