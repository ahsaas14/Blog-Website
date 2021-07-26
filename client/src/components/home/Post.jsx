import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    container: {
        height: 350,
        margin:10 ,
        borderRadius: 10 ,
        border:'1px solid #d3cede',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        '& > *':{
            padding:'0 5px 5px 5px' //top right bottom left
        }
        


    },
    image: {

        height: 150,
        width:'100%',
        objectFit:'cover',
        borderRadius:'10px 10px 0 0'
    },
    text:{
        color:'lightgrey',
        fontSize:12
    },
    heading:{
        fontSize:18,
        fontWeight:600,
        fontFamily: 'Otomanopee One',
    },
    detail:{

        fontSize:14,
        wordBreak:'break-word',
    }

});

const Post = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
                <Typography className={classes.text}>Music</Typography>
                <Typography className={classes.heading}>NOW PLAYING</Typography>
                <Typography className={classes.text}>Author: AK</Typography>
                <Typography className={classes.detail}>HIIIIII FROM AK</Typography>
    
        </Box>
    )
}
 export default Post;