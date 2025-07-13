const express = require('express');
const User = require('./models/User.js');
const app = express();
const {sequelizer} = require('./config/db.js');
const config = require('./config/index.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message : 'Hotel booking app started'});
});

app.post('/users', async (req, res) => {
  try{
    const user = await User.create(req.body); // here create sends a promise so that is why we are using await 
    res.json(user);
  } catch(error) {
    res.status(500).json({error : error.message});
  }
});

app.get('/users', async(req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch(error){
    res.status(500).json({error : error.message});
  }
});


app.listen(config.DB_PORT, () => {
  console.log(`Server is running on ${config.DB_PORT}`);
});
