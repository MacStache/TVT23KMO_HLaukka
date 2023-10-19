const db = require('../database');

const student={
    getAllStudents: function(callback){
        return db.query("SELECT * FROM student", callback);
    },
    getOneStudent: function(id,callback){
        return db.query("SELECT * FROM student where id_student=?", [id], callback);
    },
    addStudent: function(newData,callback){
        return db.query("INSERT INTO student values(?,?,?)", 
        [newData.id_student, newData.firstname, newData.lastname], callback);
    },
    updateStudent: function(id,updateData,callback){
        return db.query("UPDATE student set firstname=?, lastname=? WHERE id_student=?", 
        [updateData.firstname, updateData.lastname, id], callback);
    },
    deleteStudent: function(id,callback){
        return db.query("DELETE FROM student WHERE id_student=?", 
        [id], callback);
    }
};

module.exports=student;