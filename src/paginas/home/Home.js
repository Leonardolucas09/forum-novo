import Filtros from "../../components/filtros/Filtros";
import Pesquisar from "../../components/searchBar/search";
import Nav from "../../components/sideBar/side";
import { ContainerHome } from "./styled";


function Home() {
    

    return(
        <>
        <ContainerHome>
            <Nav/>
            <div>
                <Pesquisar/>
                <Filtros/>
            </div>
        </ContainerHome>
        </>
    )
}

export default Home;