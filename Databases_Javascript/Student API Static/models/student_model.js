const db = require('../database');

const student={
    getAllStudents: function(callback){
        return db.query("SELECT * FROM student", callback);
    },
    getOneStudent: function(id, callback){
        return db.query("SELECT * FROM student where id_student=?", [id], callback);
    },
    addStudent: function(newData,callback){
        // return "Lisätään uusi opiskelija (insert into...";
        return db.query("INSERT INTO student values(?,?,?)", 
        [newData.id_student, newData.firstname, newData.lastname], callback);
    },
    updateStudent: function(id){
        return "Päivitetään opiskelija, jonka id="+id;
    },
    deleteStudent: function(id){
        return "Poistetaan opiskelija, jonka id="+id;
    },
};

module.exports=student;