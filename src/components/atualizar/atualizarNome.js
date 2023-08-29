import Confirm from "../botoes/purple";
import { Escrever, Fundo } from "./style";

function AtualizarNome() {
    return(
        <Fundo>
            Antigo usuário
            <Escrever/>
            Novo usuário
            <Escrever/>
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarNome; 