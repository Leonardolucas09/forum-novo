import { ContainerFiltros, ContainerFiltrosPrincipal, Icones } from "./styled";
import humanas from '../../asssets/Humanas.png'
import natureza from '../../asssets/Natureza.png'
import linguagens from '../../asssets/Linguagens.png'
import mat from '../../asssets/Matematica.png'

function Filtros() {
    return(
        <>
        <ContainerFiltrosPrincipal>
            <ContainerFiltros>
            <Icones src={humanas} />
                Humanas
            </ContainerFiltros>
            <ContainerFiltros>
            <Icones src={natureza} />
                Natureza
            </ContainerFiltros>
            <ContainerFiltros>
            <Icones src={linguagens} />
                Linguagens
            </ContainerFiltros>
            <ContainerFiltros>
            <Icones src={mat} />
                Matematica
            </ContainerFiltros>
        </ContainerFiltrosPrincipal>
        </>
    )
}

export default Filtros;