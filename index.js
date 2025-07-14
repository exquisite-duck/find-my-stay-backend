const express = require('express');
const User = require('./src/models/User.js');
const {sequelizer} = require('./config/db.js');
const config = require('./config/index.js');
const allRoutes = require('./src/routes/allRoutes.js');

const app = express();
app.use(express.json());


app.use('/api', allRoutes);

app.listen(config.WEB_PORT, () => {
  console.log(`Server is running on ${config.WEB_PORT} port`);
});
