//make a request using Async & Await, returns a promise
const getTodos = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); //returns a promise, and when it resolves, stores it in a var 
  if(response.status !== 200) {
    throw new Error('cannot fetch the data'); //creating our error. DOESN'T WORK! (Still "rejected:  Failed to fetch")
  }
  
  const data = await response.json(); //gets the data returned from previous promise
 
  return data; //returns a promise, not data itself
  
};

getTodos()
  .then(data => console.log('resolved: ', data)) //get a promise (data) and use it futher in .then chaining
  .catch(error => console.log('rejected: ', error.message)); //get the error message