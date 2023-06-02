import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import ListaPostagem from '../listapostagens/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" style={{ backgroundColor: "#6E75A8" }}> 
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Olá! Meu nome é Jamile Farias, tenho 18 anos e moro no estado de São Paulo. Bem-vindos ao meu Portifólio.💖</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Como desenvolvedora FullStack Java, sou uma profissional persistente e proativa, interessada por tecnologia e tudo que ela é capaz de nos proporcionar. Com uma formação sólida em um Curso técnico de Tecnologia 
integrado ao ensino médio, me formei como técnica em Informática no ano de 2022 e me certifiquei no Bootcamp da Generation Brasil como Desenvolvedora de Software em 2023.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;