import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link} from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "#272838"}}>
                <Toolbar variant="dense">
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                 <Grid alignItems="center" item xs={8}>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal 
                        </Typography>
                    </Box>
                    </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >
                    <Grid alignItems="flex-start" item xs={8}>
                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" style={{color: "yellow"}}>
                                Criar Postagem
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                                </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Grid>
             </Grid>
                </Toolbar>
            </AppBar >
        </>
    )
}

export default Navbar;