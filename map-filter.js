const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

//map uses
// const result = numbers.map(function(element){
//     return element * element;
// })

// map uses with arrow function
// const result = numbers.map(element => element * element);
// console.log(result);

// filter
const bigger = numbers.filter(x => x >  5);

const isThere = numbers.find(x => x > 5);
console.log(isThere);