import Confirm from "../botoes/purple";
import { Textarea } from "@chakra-ui/react";
import { Fundo, EscreverBio } from "./style";

function AtualizarBio() {
    return(
        <Fundo>
            Biografia
            <Textarea maxLength={160} placeholder="Escreva um pouco sobre você..." resize="none" rows="5" cols="" fontSize="20px"/>
            <Confirm/>
        </Fundo>
    )
}

export default AtualizarBio; 