import express from "express";

//create express app
const app= express();

//Define routes
app.get('/',(req,res) =>{
   // console.log(req.query, req.headers);
    res.send('willkommen');

});

app.get('/ping',(req,res) =>{
    //console.log(req.query,req.headers);
    res.send('pingpong');
});
app.get('/file',(req,res)=>{
    console.log(process.cwd());
    res.sendFile(process.cwd() +'/index.html');
});



//Listen to incomin requests
app.listen(4000,()=> {
    console.log('Express app is running')
});




