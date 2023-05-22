<<<<<<< HEAD
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';


function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                const resposta = await api.post(`/usuarios/logar`, userLogin)
                setToken(resposta.data.token)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}> {/* o xs 6 seixa aimagem no meio pq lembra que a tela cheia tem 12 colunas? entao, 12/6= meio */}
                <Box paddingX={20}> {/*muda o tamanho dos campos de formulario */}

                <form onSubmit={onSubmit}> {/* faz as configuaraçoes do campo de forms */}
                        <Typography variant='h3' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            {/* margintop 2 significA o espaçamneto entre o forms e as mensagens de login e botão */}

                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            </Link>

                        </Box>
                    </form>
                    {/* centraliza os forms de user e senha */}
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        {/* deixa os botoes de logar e as mensages de baixo */}
                        <Box marginRight={1}>
                            {/* forms */}
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                            <Link to='/cadastre-se'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos2'>Cadastre-se</Typography>
                            </Link>
                            </Box>
                </Box>
            </Grid>
            {/* o xs 6 seixa aimagem no meio pq lembra que a tela cheia tem 12 colunas? entao, 12/6= meio */}
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;
=======
import { Link } from "react-router-dom"

function Login() {
    return (
        <>
            <Link to="/home" className='link'>
                <h1>Home</h1>
            </Link>
            <h1>Login</h1>
        </>
    )
}

export default Login
>>>>>>> 06685c82f20cd3d9e1d7cf064f58faf13c26d6b9
