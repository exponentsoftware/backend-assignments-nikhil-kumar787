
const Todo = require('./todomodel')
const express = require('express');


exports.getalltodo=async (req,res) => {
    const todo = await Todo.find();

  res.status(200).json({ todo });

}

exports.gettodoById=async (req,res) => {
    let id= req.params.id;

    const todo = await Todo.find({_id: id });

  res.status(200).json({ todo });

}

exports.addtodo = (req,res) => {

    const { username, title, category } = req.body;

   
    const todo = new Todo({
        username,
        title,
        category,
       
      });
  
      todo.save((error, todo) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });

        }

        if (todo) {
            
            
            return res.status(201).json({
            message: "Successfully addded a Todo"
            });
          }

});



}

exports.updatetodo = async (req, res) => {
    let id= req.params.id;
    const { username, title, category, status } =
      req.body;
    const todo = await Todo.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          username: username,
          title: title,
          category: category,
          status: status
        },
      },
      { new: true }
    )
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({ message: result });
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json({ error: e });
      });
  };
  

  exports.deletetodo=async (req,res) => {
    let id= req.params.id;

    const todo = await Todo.findOneAndDelete({_id: id });

    if (todo) {
        res.status(201).json({ message: "Todo removed" });
      } else {
        res.status(400).json({ message: "Something went wrong" });
      }


    }

    