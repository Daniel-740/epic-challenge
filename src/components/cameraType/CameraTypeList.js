import { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, ButtonGroup } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Box from '@mui/material/Box';
import SearchBar from "material-ui-search-bar";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


class List extends Component {

     handleDelete = (id) => {
       this.props.onDelete(id);
     };

     render() {
       const { cancelSearch, requestSearch, data, searched, navigate } = this.props;
   
       return (
        <>
         <Grid margin={'1.5rem 1rem'} sx={{display: 'flex', justifyContent: 'end'}}>
            <Grid item xs={4} marginRight="1rem">
               <Link to='/camera-type'>
                    <Button variant="outlined">
                         Add Camera Type
                    </Button>
                </Link>
            </Grid>
          </Grid>      
          <Container maxWidth={false}>
          <Box marginTop={'1rem'}>
          <SearchBar
            placeholder="Search..."
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            className="mb2 mt2"
          />
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.description}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                      >
                        <Button variant="contained" onClick={() => navigate(`/camera-type/${row.id}`)} aria-label="edit_button">
                          <EditIcon />
                        </Button>
                        <Button
                          aria-label="delete_button"
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
          </Box>
          </Container>
        </>
       );
     }
   }
   

   
 export const CameraTypeList = List;