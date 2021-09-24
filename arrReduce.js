const users = [
  {firstName: 'akshay', lastName: 'saini', age: 26},
  {firstName: 'donald', lastName: 'trump', age: 75},
  {firstName: 'deepika', lastName: 'padukone', age: 26},
  {firstName: 'elon', lastName: 'musk', age: 50}
]

/*Using reduce, find how many users has age < 30
let result = users.reduce (function (acc, cur) {
  //the initial value of acc is an empty object {}, that is being returned;
  //and we add key:value pairs to this empty object
  //cur is current object, users[i] 
  if (acc[cur.age]) { //takes a value of age and checks if it exists in acc object
    acc[cur.age]++;
  }
  else { //if doesn't exist yet
    acc[cur.age] = 1; // assign it's value to 1
  }
  return acc;
}, {}); // empty object {} is a second parameter of reduce function

console.log(result) 
// { '26': 2, '50': 1, '75': 1 } */

//Using reduce, find the first names of users whose age is < 30
//This is equal to chaining filter&map: users.filter(i => i.age < 30).map(i => i.firstName) 
let result = users.reduce (function (acc, cur) {
  //the initial value of acc is an empty arr [], that is being returned;
  //and we add the first names to this empty arr
  //cur is current object, users[i]
  if (cur.age < 30) { //checks if the age < 30
    acc.push(cur.firstName); //add to acc array
  }
  return acc;
}, []);

console.log(result)
//[ 'akshay', 'deepika' ] 
