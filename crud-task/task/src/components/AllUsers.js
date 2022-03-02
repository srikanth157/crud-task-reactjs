import {
    // Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    // TableFooter
  } from "@mui/material";

import {GetAllUsers,Deleteusers} from './service/api'
import { Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import React ,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core";




  
  //use this command to install appropriate dependency => npm install @material-ui/core --save
  
  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
    tableContainer: {
      margin: "20px auto",
      // borderRadius: 20,
      maxWidth: 800,
    },
    tableHead: {
      fontWeight: 800,
      fontSize: 18,
      // backgroundColor: "#C05D69",
      backgroundImage: "linear-gradient(to bottom, #C05D69, #E0E0E0)"
    },
    tableRow: {
      "&:nth-child(even)": {
        backgroundColor: "#E0E0E0",
      },
    },
    tableData: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Paper:{
        height:"70vh",
        marginTop:"10px",
        padding:"30px"
    },
    head:{
        backgroundColor:"#000"
    }

  });
  
  function AllUsers() {


    const [users, setUsers] = useState([]);

    const classes = useStyles();
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  


    useEffect(() => {
        getUsers();
      
    }, []);

    const deleteUser=async(id)=>{
        await Deleteusers(id)
        getUsers();
    }


const getUsers=async(props)=>{
    const response= await GetAllUsers();
    setUsers(response.data)
}

    

  
    const emptyRows =page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;
  
    return (
        <Paper className={classes.Paper}>
      
      <TableContainer component={Paper} className={classes.tableContainer} sx={{maxHeight: 500}}>
        <Table className={classes.table} size='small' stickyHeader >
          <TableHead className={classes.head}>
          <TableRow   >
                <TableCell className={classes.heading}>Id</TableCell>
                <TableCell className={classes.heading}>Name</TableCell>
                <TableCell className={classes.heading}>Email</TableCell>
                <TableCell  className={classes.heading}>Address</TableCell>
                <TableCell>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, i) =>{
                return(
             
               
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.address}</TableCell>
                        
                        <TableCell>  
                            <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/editusers/${user.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={()=>deleteUser(user.id)} >Delete</Button> 
                        </TableCell> 
                        
                    </TableRow>
                )
                
            }
             )}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5,10,15]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
       
      </TableContainer>
      
        </Paper>
     
    );
  }
  
  export default AllUsers;