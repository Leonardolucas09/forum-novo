import styled from 'styled-components'

export const ContainerPerfil = styled.div`
    display: flex;
`

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    width: 81vw;   
    min-height: 88vh; 
    background: #0F001A;
    border-left: 1.5px solid #6913A5;
`

export const ContainerUsuario = styled.div`
    width: 162vh;
    height: 40vh;
    display: flex;
`

export const ContainerImgUsuario = styled.div`
    width: 30vh;
    height: 40vh;
    display: flex;
    justify-content: center;
`

export const ImgUsuarioPerfil = styled.div`
    background-color: #6913A5;
    width: 20vh;
    height: 20vh;
    border-radius: 100px;
    margin-top: 25px;
`

export const ContainerNomeBio = styled.div`
    width: 132vh;
    height: 40vh;
    display: flex;
    flex-direction: column;
`

export const NomeUsuario = styled.h2`
    margin-top: 20px;
    margin-left: 10px;
    font-size: 30px;
    color: #BFA1D2;
    font-family: Baskervville;
`

export const BiografiaPerfil = styled.div`
    background-color: #6913A5;
    width: 80vh;
    height: 30vh;
    margin-top: 10px;
    margin-left: 10px;
`

export const ContainerTituloPostagens = styled.div`
    width: 162vh;
    height: 12vh;
    display: flex;
    align-items: end;
`

export const TituloPostagens = styled.h2`
    color: #BFA1D2;
    font-size: 30px;
    margin-left: 50px;
    font-family: Baskervville;
`

export const ContainerPostagens = styled.div`
    width: 100%;
    min-height: 30%;
    border: 3px solid #6913A5;
`