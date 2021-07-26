import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Edit, Delete } from '@material-ui/icons';
import { Link } from "react-router-dom";

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
    icons: {
        float: 'right',
        

    },
    icon: {
        padding: 5,
        border: '1px solid black',
        borderRadius: 10,
        margin: 5


    },
    heading: {
        fontSize: 30,
        fontWeight: 600,
        textAlign: 'center',
        margin: '20px '
    },
    subheading:{
        color:'grey',
        display:'flex',
        margin:'40px',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
        

    }

}))


const DetailView = () => {
const classes = useStyle();

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (

        <Box className={classes.container}>
            <img src={url} alt="Banner" className={classes.images} />
            <Box className={classes.icons}>
               <Link to='/update'> <Edit className={classes.icon} color="primary" /></Link>
                <Delete className={classes.icon} color="error" />
            </Box>
            <Typography className={classes.heading}>
                Title Of The Blog

            </Typography>
            <Box className={classes.subheading}>

               <Typography style={{fontWeight:600}}>Author: Mern Stack</Typography>
               <Typography style={{marginLeft:'auto'}}>19 July 2021</Typography>

               
            </Box>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quaerat debitis voluptatibus ea accusamus mollitia labore quidem. Corrupti cumque, quos odio facilis quis, sint alias, at impedit dolore voluptates molestiae.

            </Typography>
        </Box>
    )
}
export default DetailView;