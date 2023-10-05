const studentList=[
    {"fname":"Henkka","lname":"Laukka"},
    {"fname":"Teppo","lname":"Testi"},
    {"fname":"Ikis","lname":"Rutto"},
    {"fname":"MacStache","lname":"Partamies"},
    {"fname":"Vallu","lname":"Viiksi"},
    {"fname":"Jenni","lname":"Hallinta"},
];

const student={
    getAll: function(){
        //console.log("Tämä palauttaisi kaikki opiskelijat tietokannan taulusta");
        //console.log(studentList);
        return studentList;
    },
    getOne: function(id){
        //console.log("Tämä palauttaisi opiskelijan, jonka id= "+id);
        //console.log(studentList[id]);
        return studentList[id];
    }
};

module.exports=student;