const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const todoRoute = require('./todoroute');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.MONGO_DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });
   app.use(cors());
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
  app.use(todoRoute);


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})