import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export const Menu = () => {

     return(
          <AppBar position="static">
          <Toolbar>
               <Link to='/' className='menu__link'>
                    <Button color="inherit">
                         Home
                    </Button>
               </Link>
               
               <Link to='/cameras' className='menu__link'>
                    <Button color="inherit">
                         Cameras
                    </Button>
               </Link>

               <Link to='/camera-types' className='menu__link'>
                    <Button color='inherit'>
                         Camera Types
                    </Button>
               </Link>
          </Toolbar>
        </AppBar>
     )
}