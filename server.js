const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || config.database, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let authentication = require('./routes/auth');
let api = require('./routes/api');

app.use('/api', authentication);
app.use('/api', api);

app.get('/', function (req, res) {
  res.send('Page under construction.');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
