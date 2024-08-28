import express from 'express';
import {handleSignUp, handleLogin} from '../controllers/user.controller.js'

const UserRouter = express.Router();

UserRouter.post('/', handleSignUp)
UserRouter.post('/login', handleLogin)

UserRouter.get("/signup", (req, res) => {
    return res.render("signup");
  });

UserRouter.get("/login", (req, res) => {
    return res.render("login");
  });

export default UserRouter;