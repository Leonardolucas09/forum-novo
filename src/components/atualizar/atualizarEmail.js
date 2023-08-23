import Confirm from "../botoes/purple";
import { Escrever, Fundo } from "./style";

function AtualizarEmail() {
    return(
        <Fundo>
            Antigo Email
            <Escrever/>
            Novo Email
            <Escrever/>
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarEmail; 