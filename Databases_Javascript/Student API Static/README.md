student-api_static

REST API esimerkki, jonka tarkoituksena on havainnollistaa MVC-mallia ja APIn tekemistä Node.js:n avulla käyttäen Express.js frameworkkiä.

Tässä esimerkissä ei käytetä vielä tietokantaa, vaan data on staattista. Data sisältää tietoja opiskelijoista ja muodostuu seuraavista kentistä:

id_student
firstname
lastname

Sovelluksen osat
Controller

controllers-kansioon tehdään student.js niminen tiedosto, joka vastaa http-requesteihin:

    GET-metodi: palauttaa kaikki opiskelijat JSON-arrayna
    GET-metodi: palauttaa yhden opiskelijan JSON-objektina, opiskelija valitaan id_student-arvolla
    POST-metodi: ottaa vastaan uuden opiskelijan tiedot
    PUT-metodi: ottaa vastaan opiskelijan muutetut tiedot, opiskelija valitaan id_student-arvolla
    DELETE-metodi poistaa opiskelijan, opiskelija valitaan id_student-arvolla

Model

models-kansioon tehdään student_model.js niminen tiedosto, jossa on array nimeltään studentData ja objekti nimeltään student, joka sisältää metodit:

    getAllStudents
    getOneStudent
    addStudent
    updateStudent
    deleteStudent

Kun student controllerin endpointtiin tulee http-request, controlleri kutsuu sopivaa modelin metodia, joka palauttaa sille sopivan datan.
App.js
app.js tiedostossa tehdään määritykset siten, että student-controller vastaa endpointissa http://localhost:3000/student. Lisäksi tehdään määritykset siten, että lisättävän ja muokattavan opiskelijan tiedot voidaan antaa muodossa x-www-form-urlencoded. Sovellus käynnistyy komennolla npm start, joka suorittaa komennon node app.js.
