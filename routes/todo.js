const express = require("express");
const { addTodo, getAllTodos } = require("../controllers/todo");
const router = express.Router();


router.get('/',(req,res)=>{

   console.log("todo")
    res.render("todo",{todos :getAllTodos()})
})



router.post('/add',(req,res)=>{

    addTodo(req.body.data)
    res.send("todo added")
})





module.exports = router;