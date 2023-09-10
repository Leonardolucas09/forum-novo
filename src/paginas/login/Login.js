import {ContainerLogin, CriarConta, LogoGrande, RoxoClaro, RoxoEscuro, Titulo} from './styled'
import logo from '../../asssets/loginImagem.svg'
import Input from '../../components/input/Input';
import BotaoEntrar from '../../components/botaoEntar/BotaoEntrar';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const goToHome = () => {
        navigate('home')
    }
    const goToCadastro = () => {
        navigate('cadastro')
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        const credentials = (email, password)

        axios.post('http://localhost:8000/login', credentials, {
            headers:{
                'Content-Type': 'application/json',
        },
    })
    .then(response =>{
        alert(response.data.message)
        goToHome()
    })
    .catch(error => console.log(error))
    }

    return(
        <>
        <ContainerLogin>
            <RoxoEscuro>
                <LogoGrande src={logo}/>
                <RoxoClaro>
                    <Titulo>Login</Titulo>
                    <form onSubmit={handleSubmit}>
                        <Input titulo='Email'
                        type='email' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <Input titulo='Senha'
                        type='password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <BotaoEntrar/>
                    </form>
                    <CriarConta onClick={goToCadastro}>Criar Conta</CriarConta>
                </RoxoClaro>
            </RoxoEscuro>
        </ContainerLogin>
        </>
    )
}

export default Login;