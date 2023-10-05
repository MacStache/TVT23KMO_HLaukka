const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/eka",function(request,response){
    console.log("Kutsuit endpointtia eka");
    response.send("endpoint eka");
});

app.get("/toka/:fname",function(request,response){
    response.send("Terve "+request.params.fname);
});

app.use(function(request,response,next){
    console.log("Middleware funktio1");
    next();
});

app.get("/kolmas/:fname?",function(request,response){
    if(request.params.fname)
        response.send("Terve "+request.params.fname);
    else
        response.send("Tervetuloa tuntematon");
});

app.use(function(request,response,next){
    console.log("Middleware funktio2");
    next();
});

app.post("/addStudent",function(request,response){
    response.send(request.body);
    console.log(request.body.fname);
});

app.listen(port, function(){
    console.log("Kuuntelen porttia "+port)
});

module.export=app;