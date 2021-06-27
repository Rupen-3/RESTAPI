require('dotenv').config();
const express = require("express");
require("./db/conn");
const port = process.env.PORT || 8000;
const router = require('./router/root');
const app = express();

app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`Application Running at https://localhost:${port}/`);
});