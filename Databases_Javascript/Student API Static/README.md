# student-api_static

REST API esimerkki, jonka tarkoituksena on havainnollistaa **MVC-mallia** ja APIn tekemistä Node.js:n avulla käyttäen **Express.js** frameworkkiä.

Tässä esimerkissä ei käytetä vielä tietokantaa, vaan data on staattista.
Data sisältää tietoja opiskelijoista ja muodostuu seuraavista kentistä:
<pre>
id_student
firstname
lastname
</pre>

## Sovelluksen osat

### Controller

**controllers**-kansioon tehdään **student.js** niminen tiedosto, joka vastaa http-requesteihin:
<ol>
<li>GET-metodi: palauttaa kaikki opiskelijat JSON-arrayna</li>
<li>GET-metodi: palauttaa yhden opiskelijan JSON-objektina, opiskelija valitaan id_student-arvolla</li>
<li>POST-metodi: ottaa vastaan uuden opiskelijan tiedot</li>
<li>PUT-metodi: ottaa vastaan opiskelijan muutetut tiedot, opiskelija valitaan id_student-arvolla</li>
<li>DELETE-metodi poistaa opiskelijan, opiskelija valitaan id_student-arvolla</li>
</ol>

### Model

**models**-kansioon tehdään **student_model.js** niminen tiedosto, jossa on array nimeltään **studentData** ja objekti nimeltään **student**, joka sisältää metodit:
<ol>
<li>getAllStudents</li>
<li>getOneStudent</li>
<li>addStudent</li>
<li>updateStudent</li>
<li>deleteStudent</li>
</ol>
Kun student controllerin endpointtiin tulee http-request, controlleri kutsuu sopivaa modelin metodia, joka palauttaa sille sopivan datan.

### App.js

**app.js** tiedostossa tehdään määritykset siten, että student-controller vastaa endpointissa **http://localhost:3000/student**. Lisäksi tehdään määritykset siten, että lisättävän ja muokattavan opiskelijan tiedot voidaan antaa muodossa x-www-form-urlencoded.
Sovellus käynnistyy komennolla **npm start**, joka suorittaa komennon node app.js. 
