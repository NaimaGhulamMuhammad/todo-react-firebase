import React, { Component } from 'react'
import {Paper , TextField, Button} from '@material-ui/core';
import firebase from "../config/firebase";
import TodoList from "./todolist"

export class Todo extends Component {
    constructor (){
        super()
        this.state = {  
          todos: [],
           value: ""}
       }
       handleAdd = () =>{
        let key = firebase.database().ref('todos').push().key;
        let newTodo = {
            item: this.state.value,
            edit:false,
            id: key
        }
        firebase.database().ref('todos').child(key).set(newTodo)
            
            this.setState({
                todos: [...this.state.todos, newTodo],
                value:''
            })
       }
       handleChange = (e) => {
            this.setState({
                value: e.target.value
            })
       }
       Handle = (event , i) =>{
           if(event.target.value === null){
            alert("Please Fill out the Field")
           }
           else{
        const key = this.state.todos[i].id
        this.state.todos[i].item = event.target.value
        this.setState({
            todos: this.state.todos
        })
        firebase.database().ref('todos').child(key).set(this.state.todos[i])
           }
       }
       edit = (index) => {
           
           if(this.state.todos[index].edit)
           {
           this.state.todos[index].edit = false
        this.setState({
            todos:this.state.todos
        })  }
        else
        {
            this.state.todos[index].edit = true;
            this.setState({
            todos: this.state.todos
        })
    }
        console.log(this.state.todos[index].edit)
       }
       delete = (index) => {
           const key = this.state.todos[index].id
            firebase.database().ref('todos').child(key).remove()
            console.log(key)
            this.state.todos.splice(index,1)
            this.setState({
              todos:  this.state.todos
            })
       }
       deleteAll = () =>{
           firebase.database().ref('todos').remove();
        this.setState({
            todos:[]
        })
       }
    render() {
        const {todos,value} = this.state
       const todolist = todos.map((data,index) => <TodoList key={index} handle={(e) => this.Handle(e ,index)} data={data} delete={() => this.delete(index)} edit={() => this.edit(index)} i={index}/>) ;
        return (
            
            <Paper elevation={3} className="main" >
                <Paper elevation={5} className="form">
                <TextField variant="standard" label="Add Task" type="text" margin="none" onChange={(e) => this.handleChange(e)} value={value}/>
                <Button variant="contained" size="large" color="secondary" onClick={this.deleteAll}>Delete All</Button>
                <Button variant="contained" size="large" color="primary" onClick={this.handleAdd}>Add</Button>
                
                </Paper>
        {todolist}
            </Paper>
        )
    }
}

export default Todo
