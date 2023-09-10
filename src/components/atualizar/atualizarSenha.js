import Confirm from "../botoes/purple";
import { Escrever, Fundo } from "./style";

function AtualizarSenha() {
    return(
        <Fundo>
            Antiga senha
            <Escrever/>
            Nova senha
            <Escrever/>
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarSenha; 