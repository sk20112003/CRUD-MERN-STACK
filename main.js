import express from "express"
const app=express();
const PORT=4000;

app.get('/',(req,res)=>{
      res.json({msg:"Hellow Students"});
});


app.get('/movies',()=>{

});

app.post('/movies',()=>{
    
});

app.put('/movies/:id',()=>{

})

app.delete('/movies/:id',()=>{

})



app.listen(PORT,()=>{
    console.log(`The Server Running at http://localhost:${PORT}`);
});
