import Filtros from "../../components/filtros/Filtros";
import Post from "../../components/post/Post";
import Pesquisar from "../../components/searchBar/search";
import Nav from "../../components/sideBar/side";
import { BiografiaPerfil, ContainerImgUsuario, ContainerNomeBio, ContainerPerfil, ContainerPostagens, ContainerTituloPostagens, ContainerUsuario, Fundo, ImgUsuarioPerfil, NomeUsuario, TituloPostagens } from "./styled";


function Perfil() {
    return(
        <>
        <ContainerPerfil>
        <Nav/>
        <Fundo>
        <Pesquisar/>
        <Filtros/>
        <ContainerUsuario>
        <ContainerImgUsuario>
        <ImgUsuarioPerfil/>
        </ContainerImgUsuario>
        <ContainerNomeBio>
        <NomeUsuario>
            Nome do Usuário
        </NomeUsuario>
        <BiografiaPerfil/>
        </ContainerNomeBio>
        </ContainerUsuario>
        <ContainerTituloPostagens>
        <TituloPostagens>
            Postagens
        </TituloPostagens>
        </ContainerTituloPostagens>
        <ContainerPostagens>
            <Post/>
        </ContainerPostagens>
        </Fundo>
        </ContainerPerfil>
        </>
    )
}

export default Perfil;