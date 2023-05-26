import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/estaticos/footer/Footer';

import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import store from './store/Store';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/estaticos/navbar/NavBar';
import CadastroUsuario from './paginas/cadastroUsuario/cadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPost from './components/postagens/CadastroPost/CadastroPost';
import ListaPostagem from './components/postagens/listapostagens/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagens/deletarPostangens';
import DeletarTema from './components/temas/DeletarTema/DeletarTema';
import Perfil from './paginas/perfil/perfil';

function App() {


  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App