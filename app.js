require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => res.send('Hello'))

app.get('/forecast/:city', async (req, res, next) => {
    try {
      let city = req.params.city;
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.KEY}`);
      res.send(result.data);
    }
    catch(err) {
    }
})

app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: 'Something went wrong'
  })
})

app.listen(port, () => console.log('App listening on port 3000'))
