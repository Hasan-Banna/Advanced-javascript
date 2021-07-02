const student = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Manna'},
    {id: 41, name: 'Moyori'},
    {id: 51, name: 'Dipjol'}
];

// const output = [];
// for(let i = 0; i<student.length; i++){
//     const element = student[i];
//     const result = element.name;
//     output.push(result);
// }

const names = student.map(s => s.name);

const bigger = student.filter(s => s.id>40);
const biggerOne = student.find(s => s.id>40);
console.log(biggerOne);