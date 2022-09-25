import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const Menu = () => {

     return(
          <AppBar position="static">
          <Toolbar>
               <Button color="inherit">
                    <Link to='/' className='menu__link'>
                         Home
                    </Link>
               </Button>
               
               <Button color="inherit">
                    <Link to='cameras' className='menu__link'>
                         Cameras
                    </Link>
               </Button>

               <Button>
                    <Link to='camera-types' className='menu__link'>
                         Camera Types
                    </Link>
               </Button>
          </Toolbar>
        </AppBar>
     )
}