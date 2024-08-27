// schema validation: ensure that the data coming into your application meets certain criteria before it's processed.
// This helps in catching errors early and maintaining the integrity of your data.
// 1. JOI: flexible schema description language and data validator for JavaScript.
// Yup: schema builder for JavaScript that works similarly to Joi but has a more modern API and integrates well with React.
// Express-validator: set of middleware functions for validating request data, built on top of the validator.js library.


// JOI:

const joi=require('joi')

const schema=joi.object({
    name: joi.string().required(),
    age: joi.number().required(),
    email: joi.string().required(),
})

const validate =(schema)=> (req, res, next)=>{
    const {error}= schema.validate(req.body);
    if(error){
        return res.status(404).json({error: error.details[0].message});
    }
    next();
}

const express=require('express');
const app=express();

app.use(express.json());

app.post('/user', validate(schema), (req, res)=>{
    res.status(200).send('Successfully added');
})

app.listen(3000, ()=>{
    console.log('Server is running')
})