import Confirm from "../botoes/purple";
import { Escrever, Fundo } from "./style";

function AtualizarEmail() {
    return(
        <Fundo>
            Antigo Email
            <Escrever type='email' value='user123@gmail.com' disabled/>
            Novo Email
            <Escrever type='email' />
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarEmail; 