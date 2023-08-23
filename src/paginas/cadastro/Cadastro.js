import { ContainerCadastro, LogoGrande, RoxoClaro, RoxoEscuro, Titulo } from "./styled";
import logo from '../../asssets/loginImagem.svg'
import Input from "../../components/input/Input";
import BotaoEntrar from "../../components/botaoEntar/BotaoEntrar";

function Cadastro() {
    

    return(
        <>
        <ContainerCadastro>
            <RoxoEscuro>
                <LogoGrande src={logo}/>
                <RoxoClaro>
                    <Titulo>Cadastro</Titulo>
                    <div>
                        <Input titulo='Usuário'/>
                        <Input titulo='Email'/>
                        <Input titulo='Senha'/>
                        <Input titulo='Confirmar Senha'/>
                    </div>
                    <BotaoEntrar/>
                </RoxoClaro>
            </RoxoEscuro>
        </ContainerCadastro>
        </>
    )
}

export default Cadastro;