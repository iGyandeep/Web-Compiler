

import { AppBar, Toolbar } from '@mui/material';


const Header = () => {

    
    return (
        <AppBar position='static'>
            <Toolbar>
                {/* <img src = {logo}/> */}
                    <i className='icon'>👽</i>
                    <b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; Web Page Compiler</b>
                    <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;This project is develop by GYANDEEP.</b>
            </Toolbar>
        </AppBar>
    )
}

export default Header;