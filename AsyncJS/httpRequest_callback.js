//makes an http request to sourse (http or json file)
const getTodos = (resourse, callback) => {

  //first, makes a request object
  const request = new XMLHttpRequest();
  //listen to readystate change on request
  request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200) { //if data (response) is received sucessfully
      const data = JSON.parse(request.responseText) //converts JSON string (response) into JS object
      callback(undefined, data); //no error, only the data
    } else if(request.readyState === 4) { //request is complete but no data received back to us
      callback('could not fetch any data', undefined); //get the error message
    }
  });
  //set up a request (request method and sourse-where to send)
  //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //external, or
  //request.open('GET', 'http://httpRequest.json'); //internal json file (!!!DOESN'T GET THE ACCESS WITHOUT http//...!!!), or
  request.open('GET', resourse); //resourse = http or json file
  //send
  request.send();
};

//calling function using callbacks
getTodos((error, data) => {
  if(error) { //if response status is not 200
    console.log(error);
  } else {
    console.log(data);
  }
});
