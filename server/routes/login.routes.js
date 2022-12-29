const  express =require("express")
const { register, login, getLoggedInUser } =require("../controllers/user.controller")
const loginRoute=express.Router()

loginRoute.post("/register",register)

loginRoute.post("/login",login)

loginRoute.get("/loggedInUser",getLoggedInUser)
module.exports=loginRoute

