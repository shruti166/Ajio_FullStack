import express from "express";
import cors from "cors";
import connection  from "./config/db.js";
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res)=> {
    res.send("Welcome");
})

app.listen(3001, ()=> {
    try {
        connection();
        console.log("Server is listening at port 3001");
        
    } catch(err){
        console.log(err);
    }
})
