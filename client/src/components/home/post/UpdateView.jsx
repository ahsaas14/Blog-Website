import React from "react";

import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyle = makeStyles((theme)=>({
    container:{
        padding:'0 100px', //large screen padding
       [theme.breakpoints.down('md')]:{
           padding:0
       }

    },
    images: {
        
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form:{
        display:'flex',
        flexDirection:'row',
        margin:10
    },
    textfield:{
        flex:1,
        margin:'0 30',
        fontSize:30
    },
    textarea:{
        width:'100%',
        margin:50,
        border:'none',
        fontSize:20,
        '&:focus-visible':{
            outline:'none'
        }
    }
}));


const UpdateView =()=>{
    const classes=useStyle();
    const url='https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
    return (
        
        <Box className={classes.container}>
            <img className={classes.images} src={url} alt="banner" />
        
        <FormControl className={classes.form}>
            <AddCircleIcon fontSize='large' color='action' />

<InputBase placeholder='Title' className={classes.textfield}/>

<Button variant='contained' color='primary' >UPDATE</Button>
        </FormControl>

        <TextareaAutosize
        className={classes.textarea}
        rowsMin={5}
        placeholder="Tell Your Story...."


        />
        
        
        </Box>
        

    )
}
export default UpdateView;