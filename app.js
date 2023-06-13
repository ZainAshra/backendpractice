const express = require('express');
const app = express();
const form = require('./routes/form');
const bodyParser = require('body-parser');
const path = require('path');
const todo = require('./routes/todo')
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
  req.data = "Plentys.pk";
  next();
});

app.set('view engine','ejs')
app.set('views','Views')


app.use(express.static(path.join(process.cwd(),"public")))
app.use("/form", form);
app.use("/todo", todo);

app.listen(3000);
