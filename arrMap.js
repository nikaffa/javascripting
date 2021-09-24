//Using array.map, returns an array of full names
const users = [
  {firstName: 'akshay', lastName: 'saini', age: 26},
  {firstName: 'donald', lastName: 'trump', age: 75},
  {firstName: 'deepika', lastName: 'padukone', age: 26},
  {firstName: 'elon', lastName: 'musk', age: 50}
]
let result = users.map(i => i.firstName + ' ' + i.lastName);
console.log(result);