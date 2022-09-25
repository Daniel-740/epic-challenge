import { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, ButtonGroup } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { connect  } from "react-redux";
import { deleteCameraAction } from "../../store/camera/actions";

class List extends Component {
     handleDelete = (id) => {
       this.props.deleteCameraAction(id);
     };
     render() {
       const { cameras } = this.props;
   
       return (
         <TableContainer component={Paper}>
           <Table aria-label="simple table">
             <TableHead>
               <TableRow>
                 <TableCell>Id</TableCell>
                 <TableCell>Name</TableCell>
                 <TableCell>Camera Type</TableCell>
                 <TableCell>Actions</TableCell>
               </TableRow>
             </TableHead>
             <TableBody>
               {cameras.map((row) => (
                 <TableRow key={row.name}>
                   <TableCell component="th" scope="row">
                     {row.id}
                   </TableCell>
                   <TableCell component="th" scope="row">
                     {row.name}
                   </TableCell>
                   <TableCell component="th" scope="row">
                     {row.cameraType}
                   </TableCell>
                   <TableCell component="th" scope="row">
                     <ButtonGroup
                       color="primary"
                       aria-label="outlined primary button group"
                     >
                       <Button variant="contained">
                         <EditIcon />
                       </Button>
                       <Button
                         variant="contained"
                         color="secondary"
                         onClick={() => this.handleDelete(row.id)}
                       >
                         <DeleteIcon />
                       </Button>
                     </ButtonGroup>
                   </TableCell>
                 </TableRow>
               ))}
             </TableBody>
           </Table>
         </TableContainer>
       );
     }
   }
   
   const mapStateToProps = (state) => ({
     cameras: state.camerasReducer.cameras,
   });
   
   const mapDispatchToProps = {
     deleteCameraAction,
   };
   
 export const CamerasList = connect(mapStateToProps, mapDispatchToProps)(List);