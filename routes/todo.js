const router = require('express').Router();
const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {

    const {
        todo
    } = req.body;

    const newTodo = new Todo({
        todo: todo
    });
    newTodo.save().then((result) => {
        console.log("successfule", result)
        res.redirect("/");

    }).catch((err) => {
        console.log("failed", err)

    });

}).get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Successul");
        res.redirect("/");
    }).catch((err) => {
        console.log("failed",err);
    });
})

module.exports = router;