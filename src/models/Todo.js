// axios is promise based http client for browser and node.js
import axios from 'axios'

function TodoModel(){}

// listing all todos from api
TodoModel.all = function(){
  var request = axios.get("http://localhost:4000/todos")
  return request
}

// creating todos from api
TodoModel.create = function(todo){
  var request = axios.post("http://localhost:4000/todos", todo)
  return request
}

// updating todos, logic for when todo is completed
TodoModel.updateCompletion = function(todoId){
  var request = axios.get(`http://localhost:4000/todos/${todoId}`).then(function(res){
    var newCompletedValue = !res.data.completed
    var putRequest = axios.put(`http://localhost:4000/todos/${todoId}`, {completed: newCompletedValue})
    return putRequest
  })
  return request
}

// updating text for todos
TodoModel.update = function(todoId, todoBody){
  var request = axios.put(`http://localhost:4000/todos/${todoId}`, {body: todoBody})
  return request
}

// deleting todos
TodoModel.deleteTodo = function(todoId){
  var request = axios.delete(`http://localhost:4000/todos/${todoId}`)
  return request
}


module.exports = TodoModel
