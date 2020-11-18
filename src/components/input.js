import React, { Component } from 'react';
import  { TextField}from "@material-ui/core";

 class Input extends Component {
    render() {
        return (
            <div>
                
                <TextField id="standard-basic" label="Enter Your TODO " required type="text"onChange={(e)=>this.props.getValue(e.target.value)} value={this.props.value}/>
               
                
            </div>
        )
    }
}

export default Input
