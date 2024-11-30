import express from "express";
import moviRoute from "./routes/movies.route.js"
import connectDB from "./lib/db.js";
const app=express();
const port=6000;

app.use(express.json());
app.use('/movies',moviRoute );
app.listen(port,()=>{
    console.log(`The Server Running at http://localhost:${port}`);
    connectDB();
});
