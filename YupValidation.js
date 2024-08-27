const yup=require('yup');

const schema=yup.object({
    name: yup.string().min(3).required(),
    age: yup.number().required(),
})

const validate = (schema) => async (req, res, next) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const express=require('express')
const app=express()

app.use(express.json())

app.post('/user', validate(schema), (req, res)=>{
    res.status(200).send('Successfully created')
})

app.listen(5000, ()=>{
    console.log('Server running')
})