import { User } from "../models/user.model.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


async function handleSignUp(req, res){
    const {username, email, password} = req.body;
    const hashedPassword=await bcrypt.hash(password, 10);
    await User.create({
        username,
        email,
        password: hashedPassword
    })
    return res.redirect('/login')
}

async function handleLogin(req, res){
    const {email, password} = req.body;
    const user=await User.findOne({email});
    if(user && bcrypt.compare(password, user.password)){
        return res.redirect("/");
    }
    return res.sendFile(__dirname+ '/login.html')
}

export {handleSignUp, handleLogin}