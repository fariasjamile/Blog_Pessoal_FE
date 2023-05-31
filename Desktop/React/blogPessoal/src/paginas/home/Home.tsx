import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModelPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Olá, seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/posts'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src="https://i.imgur.com/FsTHheY.png" alt="Descrição da imagem" />
                </Grid>
                <Grid xs={12} className='postagens'>
                <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;