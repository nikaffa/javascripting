//Using chaining of array.filter & array.map, rfinds name of all users whose age < 30
const users = [
  {firstName: 'akshay', lastName: 'saini', age: 26},
  {firstName: 'donald', lastName: 'trump', age: 75},
  {firstName: 'deepika', lastName: 'padukone', age: 26},
  {firstName: 'elon', lastName: 'musk', age: 50}
]
let result = users.filter(i => i.age < 30) //i is an object in users array. First, filter objects whose .age < 30
            .map(i => i.firstName); //then, take a name from this output 
console.log(result);

//[ 'akshay', 'deepika' ]