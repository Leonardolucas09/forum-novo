import {ContainerLogin, CriarConta, LogoGrande, RoxoClaro, RoxoEscuro, Titulo} from './styled'
import logo from '../../asssets/loginImagem.svg'
import Input from '../../components/input/Input';
import BotaoEntrar from '../../components/botaoEntar/BotaoEntrar';


function Login() {
    
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
                    <CriarConta>Criar Conta</CriarConta>
                </RoxoClaro>
            </RoxoEscuro>
        </ContainerLogin>
        </>
    )
}

export default Login;