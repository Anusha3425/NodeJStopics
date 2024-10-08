// Third-party modules: are available online using the Node Package Manager(NPM).
// ex moogose, express, react etc 

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server running');
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});