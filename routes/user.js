import express from 'express';
import {handleSignUp, handleLogin} from '../controllers/user.controller.js'
// import {restrictToLoggedinUserOnly} from '../middleware/restrictLogin.js'

const UserRouter = express.Router();

UserRouter.post('/', handleSignUp)
UserRouter.post('/login', handleLogin)

UserRouter.get("/signup", (req, res) => {
    return res.render("signup");
  });

UserRouter.get("/login", (req, res) => {
    return res.render("login");
  });

UserRouter.get('/home', (req, res)=>{
  return res.render("home")
})

UserRouter.get('/upload', (req, res)=>{
  return res.render("upload")
})

export default UserRouter;