import { makeStyles,Box, Typography } from "@material-ui/core";
const useStyles=makeStyles({
    image: {
background:`url(${'https://images.unsplash.com/photo-1514483127413-f72f273478c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}) center/70% repeat-x #000`,
width: '100%',
//margin:'auto',
height: '60vh',
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
'& :first-child':{
    fontSize:70,
    color:'white',
},
'& :last-child':{
    fontSize: 30,
    background:'white'
}

 }
});



const Banner=()=>{
    const classes=useStyles();
   // const url ='https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
    return(
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>MERN STACK</Typography>

        </Box>
    )
}
export default Banner;
