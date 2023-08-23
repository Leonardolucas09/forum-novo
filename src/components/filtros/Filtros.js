import { ContainerFiltros, ContainerFiltrosPrincipal, Criar, Melhores, Novos, Populares } from "./styled";
import popular from '../../asssets/maisPopulares.svg'
import melhores from '../../asssets/melhores.svg'
import novos from '../../asssets/novos.svg'
import criar from '../../asssets/criarPost.svg'

function Filtros() {
    return(
        <>
        <ContainerFiltrosPrincipal>
        <ContainerFiltros>
        <Populares src={popular} />
            Mais Populares
        </ContainerFiltros>
        <ContainerFiltros>
        <Melhores src={melhores} />
            Melhores
        </ContainerFiltros>
        <ContainerFiltros>
        <Novos src={novos} />
            Novos
        </ContainerFiltros>
        <ContainerFiltros>
        <Criar src={criar} />
            Crie um Post
        </ContainerFiltros>
        </ContainerFiltrosPrincipal>
        </>
    )
}

export default Filtros;