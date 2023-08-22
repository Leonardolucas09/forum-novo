import { Caminhos, Fundo, Icone, ImgLogo, Logo, Menu } from "./style";
import logo from '../../asssets/icone.svg'
import home from '../../asssets/home.svg'
import perfil from '../../asssets/perfil.svg'
import config from '../../asssets/configuracoes.svg'
import imgLogo from '../../asssets/loginImagem.svg'

function Nav() {
    return(
        <Fundo>
            <Logo src={logo}/>
            <Menu>
                <Caminhos>
                    <Icone src={home}/>
                    Home
                </Caminhos>
                <Caminhos>
                    <Icone src={perfil}/>
                    Perfil
                </Caminhos>
                <Caminhos>
                    <Icone src={config}/>
                    Configurações
                </Caminhos>
                <ImgLogo src={imgLogo}/>
            </Menu>
        </Fundo>
    )
}

export default Nav; 