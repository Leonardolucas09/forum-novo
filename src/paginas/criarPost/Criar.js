import Filtros from "../../components/filtros/Filtros";
import Pesquisar from "../../components/searchBar/search";
import Nav from "../../components/sideBar/side";
import { BotaoPostar, ContainerCriar, DivPrincipal, DivUser, Fundo, ImgUser, Post, UserName } from "./styled";


function Criar(props) {
    
    return(
        <>
        <ContainerCriar>
            <Nav/>
            <Fundo>
                <Pesquisar/>
                <DivPrincipal>
                    <DivUser>
                        <ImgUser src={props.img}/>
                        <UserName>User123</UserName>
                    </DivUser>
                    <Post type="text" placeholder="Escreva aqui..."/>
                    <BotaoPostar>Postar</BotaoPostar>
                </DivPrincipal>
            </Fundo>
        </ContainerCriar>
        </>
    )
}

export default Criar;