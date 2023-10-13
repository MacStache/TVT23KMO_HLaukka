const express=require('express');
const router=express.Router();
const student=require('../models/student_model');

router.get('/',function(request,response){
    let data=student.getAllStudents();
    response.json(data);
});

router.get('/:id',function(request,response){
    let data=student.getOneStudent(request.paramps.id);
    response.json(data);
});

router.post('/', function(request,response){
    let data=student.addStudent();
    response.json(data);
});

router.put('/:id', function(request,response){
    let data=student.updateStudent(request.params.id);
    request.json(data);
});

router.delete('/:id', function(request,response){
    let data=student.deleteStudent(request.params.id);
    request.json(data);
});

module.exports=router;