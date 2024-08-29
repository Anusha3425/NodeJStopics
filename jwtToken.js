import dotenv from 'dotenv';
import express from 'express';
import jwt from 'jsonwebtoken';

const app= express();

dotenv.config();

let port=process.env.port || 5000;

app.listen(port, ()=>{
    console.log(`Port is running on port ${port}`)
})

app.post('/user/generateToken', (req, res)=>{
    let jwtSecretkey=process.env.JWT_SECRET;
    let data={
        userId:12
    }

    const token=jwt.sign(data, jwtSecretkey);
    console.log(token)
    res.send(token)
})

app.get('/user/validateToken', (req, res)=>{
    let headerkey=process.env.TOKEN_HEADER_KEY;
    let secretKey=process.env.JWT_SECRET;

    try{
        const token=req.header(headerkey);
        const verified=jwt.verify(token, secretKey)
        if(verified){
            return res.status(200).json("Verified")
        }
        else{
            return res.status(500).json("Deniedm,")
        }
    }
    catch(error){
        return res.status(500).json("Denied")
    }
})