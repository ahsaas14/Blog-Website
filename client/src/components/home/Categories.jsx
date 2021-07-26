import React from "react";
import { Button, makeStyles, Table, TableCell, TableHead, TableRow, TableBody } from "@material-ui/core";
import { categories } from "../../constants/data";
import { Link } from "react-router-dom";



const useStyle = makeStyles({
    create: {
        margin: 20,
        background: 'pink',
        color: 'black',
        width:200

    },
    table:{
        border:'1px solid rgba(224, 224, 224, 1)'

    },
    link:{
        textDecoration:'none',
        color:'inherit'
    }

})

const Categories = () => {
    const classes = useStyle();
    return (
        <>
<Link to='/create' className={classes.link}><Button variant="contained" className={classes.create}>Create blog</Button></Link>
   
   <Table className={classes.table}>
       <TableHead>
           <TableRow>
               <TableCell>All Categories</TableCell>
           </TableRow>
       </TableHead>
       <TableBody>
           {
               categories.map(category => (
                   <TableRow>
                       <TableCell>{category}</TableCell>
                   </TableRow>


               ))
            }
       </TableBody>
   </Table>
   </>
    );

}
export default Categories;