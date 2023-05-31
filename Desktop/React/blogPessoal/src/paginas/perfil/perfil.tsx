import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import User from '../../models/User';
import { buscaId } from '../../services/Service';
import './Perfil.css'
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

function Perfil() {

    let history = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
              });
            history("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={ user.foto }
                    alt={ user.nome } />
            </Box>

            <Box className='card-container-info'>
                <Box>
                    <h1>{ user.nome }</h1>
                    <h3>{ user.usuario }</h3>
                    <hr />
                </Box>
                <p className='card-container-texto'>
                Olá! Meu nome é Jamile Farias, tenho 18 anos, e sou uma desenvolvedora Java Fullstack Junior. Desde muito novinha eu tive interesse por tecnologia e tudo que tinha ligação com ela, amava assistir conteúdos com supergênios da tecnologia. Mas minha trajetória com tecnologia começou mesmo em 2020, quando resolvi cursar o ensino médio integrado ao ensino profissional e me tornei Técnica Informática, onde pude aprender conceitos básicos sobre Software, redes, manutenção de computadores e hardware. Em conjunto com o curso, também tive a oportunidade de participar de 2 projetos de programação onde pude aprender gestão e trabalho em equipe e também tive um período de estágio em uma empresa de distribuição de Internet que me proporcionaram aprendizados sobre comunicação e proatividade. Atualmente estou aprofundando meus conhecimentos em programação através de um bootcamp na Generation Brasil, uma instituição de ensino focada em formação profissional em Tecnologia, no qual tenho sido desafiada diariamente com novos conteúdos técnicos e aprimorando minhas habilidades comportamentais que são indispensáveis para formação de um profissional qualificado. Vocês podem acompanhar melhor essa trajetória pelo meu github que está disponível logo acima, te espero lá!
                </p>
            </Box>
        </Box>
    )
}

export default Perfil