import React, { Component } from 'react';
import Input from "./components/input";
import MyButton from "./components/Mybutton";
import {Grid} from "@material-ui/core";


class TodoList extends Component {
    getData = (val) => {
        this.props.todos.item = val
        this.setState({
            todos: this.props.todos
        })
        
    }

    editTodo = () => {
        
        this.props.todos.edit = true
        this.setState({
            todos: this.props.todos
        })
        
    }
    updateTodo = () => {
        this.props.todos.edit = false
        this.setState({
            todos: this.props.todos
        })
    }
    deletTodo = () => {
    //    this.state.todos.splice(this.props.i, 1)
        console.log(
            
        )
    this.setState({
            todos: this.props.todos
        })
    }
    render() {
        let{todos} = this.props
        return (
            <>
                <Grid spacing={3} container justify="center">
                    <Grid item>
                    {todos.edit? <Input getValue={this.getData} value={todos.item}/> : todos.item}
                    </Grid>
                    <Grid item>
                    {todos.edit? <MyButton value="Update" click={this.updateTodo}/> : 
                    <MyButton value="Edit Item" click={this.editTodo}/>}
                    </Grid>
                    <Grid item>
                    <MyButton value="Delet Item" click={this.deletTodo}/>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default TodoList
