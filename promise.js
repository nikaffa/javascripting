//Promise and promise chaining

//an async function that doubles a number with a delay of 1 second:
function delayDouble(number) {
  return new Promise((d) => {
    setTimeout(() => d(2 * number), 1000);
  });
}
//A chain of promises:
//option 1: double 3 times the number 5:
delayDouble(5)
  .then(value1 => {
    console.log(value1); // logs 10
    return delayDouble(value1);
  })
  .then(value2 => {
    console.log(value2); // logs 20
    return delayDouble(value2);
  })
  .then(value3 => {
    console.log(value3); // logs 40
  })
  .catch(error => {
    console.log(error); // logs Error('Oops!')
  }); 

//option 2: if any promise in the chain rejects,the resolving flow jumps to the first .catch(), bypassing all .then() in between:
delayDouble(5)
  .then(value1 => {
    console.log(value1); // logs 10
    return new Promise((_, reject) => reject(new Error('Oops!')));
  })
  .then(value2 => {
    console.log(value2); // Skipped...
    return delayDouble(value2);
  })
  .then(value3 => {
    console.log(value3); // Skipped...
  })
  .catch(error => {
    console.log(error); // logs Error('Oops!')
  }); 