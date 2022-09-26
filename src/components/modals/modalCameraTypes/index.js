import React from 'react'
import { withStyles, MenuItem } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { teal, grey } from "@material-ui/core/colors";

const styles = theme => ({
     root: {
       flexGrow: 1
     },
     primaryColor: {
       color: teal[500]
     },
     secondaryColor: {
       color: grey[700]
     },
   
     padding: {
       padding: 0
     },
     mainHeader: {
       backgroundColor: grey[100],
       padding: 20,
       alignItems: "center"
     },
     mainContent: {
       padding: 40
     },
     secondaryContainer: {
       padding: "20px 25px",
       backgroundColor: grey[200]
     }
   });
   const countries = [
     {
       value: "USA",
       label: "USA"
     },
     {
       value: "EUR",
       label: "EUR"
     },
     {
       value: "BTC",
       label: "BTC"
     },
     {
       value: "JPY",
       label: "JPY"
     }
   ];


const ModalComponent = (props) => {
     const { classes, open, setOpen, data } = props;
   
     return (
       <Dialog
         className={classes.root}
         fullWidth
         maxWidth="md"
         open={open}
       >
         <DialogContent className={classes.padding}>
           <Grid container>
             <Grid item xs={12}>
               <Grid container direction="row" className={classes.mainHeader}>
                 <Grid item xs={11}>
                   <Typography className={classes.primaryColor} variant="h5">
                     Edit record
                   </Typography>
                 </Grid>
                 <Grid item xs={1}>
                 <IconButton
                    onClick={() => setOpen(false)}
                    edge="start"
                    align="right"
                    color="inherit"
                    aria-label="Close"
                    style={{ padding: 8 }}
                    // className={classes.padding}
                  >
                  <CloseIcon />
                  </IconButton>
                 </Grid>
               </Grid>
               <Grid
                 container
                 direction="row"
                 className={classes.mainContent}
                 spacing={1}
               >
                <h2>a</h2>
               </Grid>
             </Grid>
           </Grid>
         </DialogContent>
       </Dialog>
     );
   }
   
   export const ModalCameraTypes = withStyles(styles)(ModalComponent);
   