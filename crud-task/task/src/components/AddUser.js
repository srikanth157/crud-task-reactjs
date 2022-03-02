import { FormControl, FormGroup, InputLabel,Input, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { addUserDetails } from './service/api'
import { useHistory } from 'react-router-dom'

 const initialValues={
    name:'',
    email:'',
    address:''

}


const AddUser = () => {

const [user,setUser]=useState(initialValues)
const {name,email,address}=user
const history=useHistory();




const onInputChange=(e)=>{
    // console.log(e.target.value)
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)

}
const addUser=async()=>{
   await addUserDetails(user) 
   history.push('./allusers')
}

  return (
    
       <FormGroup>
        
        <FormControl>
            <InputLabel>name</InputLabel>
            <Input onChange={(e)=>onInputChange(e)} name='name' value={name}/>
        </FormControl>
        <FormControl>
            <InputLabel>email</InputLabel>
            <Input  onChange={(e)=>onInputChange(e)} name='email' value={email}/>
        </FormControl>
        <FormControl>
            <InputLabel>address</InputLabel>
            <Input onChange={(e)=>onInputChange(e)} name='address' value={address}/>
        </FormControl> 
        <FormControl> 
            <Button color="primary" variant="contained" onClick={() => addUser()} >ADD USER</Button>
        </FormControl>
        
    </FormGroup>
     
   
  )
}

export default AddUser