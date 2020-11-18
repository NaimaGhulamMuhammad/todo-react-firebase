import React, { Component } from 'react';
import MyButton from './components/Mybutton';
import Input from "./components/input"
import TodoList from "./todolist";
import Logo from "./components/logo";
import {Grid} from "@material-ui/core"

export class App extends Component {
  constructor (){
    super()
    this.state = {  
      todos:[
              {item: "lunch", edit:false }
      ],
       value: ""}
   }

    getValue = (value) => {
    console.log(value)
    this.setState({
      value: value
    })
    }

    addTodo = () => {
      console.log(this.state.value)
      let new_todo = {
        item: this.state.value,
        edit: false
      }
      this.setState({
        todos: [...this.state.todos, new_todo],
        value: " "
      })
    }
    deletAll = () => {
      this.setState({
        todos: []
      })
    }

  render() {
    let {todos, value} = this.state
    const todoList = todos.map((todos,index) => <TodoList todos={todos} value={value} i={index} key={index}/>)
   
    return (

      <div>
        <Grid spacing={5} container justify="center">
        <Grid item container justify="center">
          <Logo />
          </Grid>
          <Grid item>
        <Input getValue={this.getValue} value={value} />
        </Grid>
        <Grid item>
        <MyButton value="Add Todo" click={this.addTodo} />
        </Grid>
        <Grid item>
        <MyButton value="Delet All" click={this.deletAll}/>
        </Grid>
        
        {todoList}
        </Grid>
      
      </div>

    )
  }
}

export default App

