const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

var homeRouter = require('./routes/home');
app.use('/', homeRouter);

const servicesRouter = require('./routes/services');
app.use('/services', servicesRouter);

const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log("Server Started...");
});