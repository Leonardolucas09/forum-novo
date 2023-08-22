import { DivInput, Entrada, TituloInput } from "./styled";


function Input(props) {
    

    return(
        <>
        <DivInput>
            <TituloInput>{props.titulo}</TituloInput>
            <Entrada/>
        </DivInput>
        </>
    )
}

export default Input;