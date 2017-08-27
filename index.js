const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const pdf = require('./pdf');

const app = express();

const PORT = process.env.port || 3000;

app.use(cors())
app.use(bodyParser())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (request, response) => {
  response.status(200).json({
    data: {
      name: 'Generate your PDF!'
    }
  });
});

app.post('/pdf', pdf)