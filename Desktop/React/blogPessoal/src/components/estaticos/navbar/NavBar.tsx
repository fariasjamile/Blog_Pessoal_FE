import React from 'react';
import { AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';

import './Navbar.css'

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();
    
    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
       navigate('/login')
    }
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "#272838"}}>
                <Toolbar variant="dense">
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                 <Grid alignItems="center" item xs={10}>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal 
                        </Typography>
                    </Box>
                    </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" >

                    <Grid alignItems="flex-start" item xs={10}> 
                    {/* muda o tamanho doa faixa */}

                    <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={6} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                        <Link to= "/posts" className="text-decorator-none">
                        <Box mx={6} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        </Link>

                        <Link to= "/temas" className="text-decorator-none">
                        <Box mx={6} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        </Link>

                        <Link to= "/FormualarioTema" className="text-decorator-none-especial">
                        <Box mx={6} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Temas
                                </Typography>
                        </Box>
                        </Link>

                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={6} className='cursor' onClick={goLogout}>
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