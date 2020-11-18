import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography, IconButton, TextField, Grid} from "@material-ui/core"
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    root: {
        height:"80px",
        padding:"2%",
        margin:"3%"
    },
    text:{
        margin:"3%"
    }

})
function TodoList(props) {
   const classes = useStyles();
   const index = props.i
        return (
            <Paper className={classes.root} elevation={9}>
                {props.data.edit?
                <TextField label="Edit Task" variant="standard" value={props.data.item} onChange={(e) => props.handle(e, index)}></TextField>:
                <Typography className={classes.text} variant="h6" compoenent="span" display="inline" align="justify" color="primary">{props.data.item}</Typography>
                }
                
                {props.data.edit?
                <IconButton variant="contained" color="primary" size="small" onClick={() => props.edit(index)}><RefreshIcon/></IconButton>:
                <IconButton variant="contained" color="primary" size="small" onClick={() =>props.edit(index)}><EditIcon/></IconButton>}
                 <IconButton variant="contained" color="primary" size="small" onClick={() =>props.delete(index)} ><DeleteIcon/></IconButton>
            </Paper>
        )
    }


export default TodoList
