const express = require('express');

const app = express();
const mongoose=require("mongoose");

// connection to mongodb

mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));


//server configuraton

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})