import { CampoPesquisa, Lupa, Fundo } from "./style";
import lupa from '../../asssets/pesquisar.svg'

function Pesquisar() {
    return(
        <>
            <Fundo>
                <Lupa src={lupa} />
                <CampoPesquisa type="search" placeholder="Pesquisar"/>
            </Fundo>
        </>
    )
}

export default Pesquisar;