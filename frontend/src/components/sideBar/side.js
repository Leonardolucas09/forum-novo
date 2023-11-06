import { Caminhos, Fundo, Icone, ImgLogo, Logo, Menu } from "./style";
import logo from '../../asssets/icone.svg'
import home from '../../asssets/home.svg'
import perfil from '../../asssets/perfil.svg'
import config from '../../asssets/configuracoes.svg'
import imgLogo from '../../asssets/loginImagem.svg'
import criar from '../../asssets/criarPost.svg'
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate()
    const goToConfig = () => {
        navigate('/configuracoes')
    }
    const goToPerfil = () => {
        navigate('/perfil')
    }
    const goToHome = () => {
        navigate('/home')
    }
    const goToCriar = () => {
        navigate('/criar-post')
    }

    return(
        <Fundo>
            <Logo src={logo}/>
            <Menu>
                <Caminhos onClick={goToHome}>
                    <Icone src={home}/>
                    Home
                </Caminhos>
                <Caminhos onClick={goToPerfil}>
                    <Icone src={perfil}/>
                    Perfil
                </Caminhos>
                <Caminhos onClick={goToConfig}>
                    <Icone src={config} />
                    Configurações
                </Caminhos>
                <Caminhos onClick={goToCriar}>
                    <Icone src={criar} />
                    Crie um post
                </Caminhos>
                <ImgLogo src={imgLogo}/>
            </Menu>
        </Fundo>
    )
}

export default Nav; 