import {ContainerLogin, CriarConta, LogoGrande, RoxoClaro, RoxoEscuro, Titulo} from './styled'
import logo from '../../asssets/loginImagem.svg'
import Input from '../../components/input/Input';
import BotaoEntrar from '../../components/botaoEntar/BotaoEntrar';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navegar = useNavigate()
    const goToCadastro = () => {
        navegar('/cadastro')
    }

    return(
        <>
        <ContainerLogin>
            <RoxoEscuro>
                <LogoGrande src={logo}/>
                <RoxoClaro>
                    <Titulo>Login</Titulo>
                    <div>
                        <Input titulo='Usuário'/>
                        <Input titulo='Senha'/>
                    </div>
                    <BotaoEntrar/>
                    <CriarConta onClick={goToCadastro}>Criar Conta</CriarConta>
                </RoxoClaro>
            </RoxoEscuro>
        </ContainerLogin>
        </>
    )
}

export default Login;