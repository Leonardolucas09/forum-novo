import { CampoPesquisa, Lupa, Fundo } from "./style";
import lupa from '../../asssets/pesquisar.svg'

function Pesquisar() {
    return(
        <>
            <Fundo>
                <Lupa src={lupa} />
                <CampoPesquisa>Pesquisar</CampoPesquisa>
            </Fundo>
        </>
    )
}

export default Pesquisar;