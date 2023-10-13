const express=require('express');
const port=3000;
const studentRouter=require('./controllers/student');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/student',studentRouter);
app.listen(port,function(){
    console.log("sovellus kuuntelee porttia "+port);
});

app.get('/',function(request,response){
    response.send("Express API esimerkki");
});

module.exports=app;