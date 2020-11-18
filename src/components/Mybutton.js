import React, { Component } from 'react';
import {IconButton, Button} from "@material-ui/core";
import {Add, Delete} from "@material-ui/icons"
import {DeleteIcon} from "@material-ui/icons/Delete"

class MyButton extends Component {
    render() {
        return (
            <div>
            
            <button onClick={() => this.props.click()} >{this.props.value}</button>
                
            </div>
        )
    }
}

export default MyButton
