const student=require('./student.js');

const allStudents=student.getAll();
const firstStudent=student.getOne(0);

console.log(allStudents);
console.log(firstStudent);