// Hashing: securely handling passwords and sensitive data.
// for that we need library like bcrypt and crypto

import { createHash } from 'crypto';
import express from 'express';

const app=express()

// Function to hash data
function hashData(data) {
  return createHash('sha256').update(data).digest('hex');
}

app.get('/hash', (req, res) => {
  const { data } = req.query;
  const hashedData = hashData(data);
  res.send({ hashedData });
  console.log(hashedData)
});

app.listen(5000)
