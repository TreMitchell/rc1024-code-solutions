const colors: string[] = ['red', 'white', 'blue'];
console.log('value at colors[0]:', colors[0]);
console.log('value at colors[1]:', colors[1]);
console.log('value at colors[2]:', colors[2]);

console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);

colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`);
console.log('value of colors:', colors);
console.log('typeof colors:', typeof colors);

const students: string[] = ['Tré', 'Rex', 'Will', 'Sara'];
const numberOfStudents: number = students.length;
console.log('value of numberOfStudents:', numberOfStudents);
const lastIndex: string = students[students.length - 1];
const lastStudent: string = lastIndex;
console.log('value of lastStudent:', lastStudent);
console.log('value of students:', students);
console.log('typeof students:', typeof students);
