//makes an http request to sourse (http or json file)
const getTodos = (resourse) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();//first, makes a request object
    
    request.addEventListener('readystatechange', () => { //listen to readystate change on request
      if(request.readyState === 4 && request.status === 200) { //if data (response) is received sucessfully
        const data = JSON.parse(request.responseText) //converts JSON string (response) into JS object
        resolve(data); 
      } else if(request.readyState === 4) { //request is complete but no data received back to us
        reject('error getting resourse'); 
      }
    });
    //set up a request (request method and sourse-where to send)
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //external, or
    //request.open('GET', 'http://httpRequest.json'); //internal json file (!!!DOESN'T GET THE ACCESS WITHOUT http//...!!!), or
    request.open('GET', resourse); //resourse = http or json file
    //send
    request.send();
  });
};

  
//calling using promise
getTodos('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => { 
    console.log('promise 1 resolved: ', data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/2');
  }).then(data => { 
    console.log('promise 2 resolved: ', data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/3');
  }).then(data => { 
    console.log('promise 3 resolved: ', data);
  }).catch(error => {
    console.log('promise rejected: ', error);
});
