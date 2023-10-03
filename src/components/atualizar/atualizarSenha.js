import Confirm from "../botoes/purple";
import { Escrever, Fundo } from "./style";

function AtualizarSenha() {
    return(
        <Fundo>
            Antiga senha
            <Escrever type="password"/>
            Nova senha
            <Escrever type="password"/>
            Repetir nova senha
            <Escrever type="password"/>
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarSenha; 