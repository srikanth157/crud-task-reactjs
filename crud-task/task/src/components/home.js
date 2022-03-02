import {AppBar,Toolbar,makeStyles, Typography} from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom'


const useStyle=makeStyles({
    tab:{
        color:"#fff",
      marginLeft:"auto",
      width:"100px",
      height:"40px"
    },
    navbar:{
        position:"static",
        backgroundColor:"#000",
        marginBottom:"30px"
    },
    link:{
        textDecoration:"none",
        color:"#000"
    }

})


const Home = () => {

    const classes=useStyle()
  return (
   <AppBar className={classes.navbar}>
       <Toolbar>
           <Typography>USER DETAILS </Typography>
           <button className={classes.tab}> <NavLink className={classes.link}  to='/allusers'>All Users</NavLink></button>
          <button className={classes.tab}> <NavLink className={classes.link} to='/adduser'>Add User</NavLink></button>
          
       </Toolbar>
   </AppBar>
  )
}

export default Home