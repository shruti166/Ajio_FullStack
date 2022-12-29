import express from "express"
import connection from "./config/db.js";
import { register, login, getLoggedInUser } from "./controller/user.controller.js";


const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({
        message:"welcome"
    })
})

app.post("/register",register)



app.get("/loggedInUser",getLoggedInUser)


app.listen(3001, ()=> {
    try {
        connection();
        console.log("Server is listening at port 3001");
        
    } catch(err){
        console.log(err);
    }
})
