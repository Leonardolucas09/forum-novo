import Confirm from "../botoes/purple";
import { FtPerfil, Fundo } from "./style";


function AtualizarFoto(props) {
    

    return(
        <>
        <Fundo>
            <h3>
            Mudar foto de perfil
            </h3>
            <FtPerfil src={props.foto} />
            
            <Confirm/>
        </Fundo>
        </>
    )
}

export default AtualizarFoto;   