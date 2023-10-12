const stundentData=[
    [id_student:1, firstname:'Teppo', lastname:'Testi'],
    [id_student:2, firstname:'Henkka', lastname:'Laukka'],
    [id_student:3, firstname:'Jani', lastname:'Juoksija'],
];

const studentData={
    getAllStudents: function(){
        return studentData;
    },
    getOneStudent: function(id){
        return studentData[id-1];
    },
    addStudent: function(){
        return "Lisätään uusi opiskelija (insert into...";
    },
    updateStudent: function(){
        return "Päivitetään opiskelija, jonka id="+id;
    },
    deleteStudent: function(){
        return "Poistetaan opiskelija, jonka id="+id;
    },
};
module.exports=student;