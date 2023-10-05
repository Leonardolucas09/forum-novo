import Filtros from "../../components/filtros/Filtros";
import Post from "../../components/post/Post";
import Pesquisar from "../../components/searchBar/search";
import Nav from "../../components/sideBar/side";
import { ContainerHome, Fundo } from "./styled";


function Home() {
    

    return(
        <>
        <ContainerHome>
            <Nav/>
            <Fundo>
                <Pesquisar/>
                <Filtros/>
                <Post/>
            </Fundo>
            
        </ContainerHome>
        </>
    )
}

export default Home;