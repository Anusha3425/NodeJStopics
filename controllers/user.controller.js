import { User } from "../models/user.model.js";
import {v4 as uuidv4} from "uuid";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import {setUser, getUser} from "../Auth.js"

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
    try{const {email, password} = req.body;
    const user=await User.findOne({email});
    // const crtpassword= bcrypt.compare(password, user.password)
    if(user){
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
    expiresIn: '1h',
    });
    res.status(200).json({ token });
    }
    const sessionId=uuidv4();
    setUser(sessionId, user);
    res.cookie('uid',sessionId)
    return res.redirect('/home');} 
    catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
    return res.redirect('/login');
}

export {handleSignUp, handleLogin}