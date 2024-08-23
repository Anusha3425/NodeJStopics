import express from 'express';

const app = express();

const users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Alice', age: 30 },
  { id: 3, name: 'Bob', age: 28 }
];

app.get('/',  function(req, res) {
  res.send('Start Express!');
});

// pass name and age in the query params
app.get('/name', function(req, res) {
    const { name, age } = req.query;
    res.send(`Hello ${name}! You are ${age} years old!`);
});

app.get('/users/:id', function(req, res) {
    const { id } = req.params;
    res.send(`Hello user ${id}!`);
});

app.get('/users/:id/:name', function(req, res) {
  const { id, name } = req.params;
  res.send(`User ${id}! and the name is ${name}!`);
});


app.listen(5000, function() { 
  console.log('Server listening on http://localhost:5000/');
});