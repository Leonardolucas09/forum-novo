import styled from "styled-components";

export const ContainerPost = styled.div`
    min-height: 130px;
    width: 90%;
    background-color: #7729af;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    justify-content: flex-end;
    `

export const DivTexto = styled.div`
    min-height: 130px;
    width: 93%;
    background-color: #51018a;
    border-radius: 0 20px 20px 0;
`

export const DivLikes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px; 
`

export const Like = styled.img`
    height: 30px;
`

export const QntVotos = styled.p`
    font-size: 18px;
    color: #BFA1D2;
    `

export const InfoPost = styled.p`  
    color: #BFA1D2;
    margin-left: 10px;
`

export const TextoPost = styled.p`
    color: #BFA1D2;
    margin: 10px 20px 0 10px;
    text-align: justify;
    font-size: 20px;
    `

export const Comentar = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    color: #BFA1D2;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
    gap: 4px;
    &:hover{
        text-decoration: underline;
    }
`

export const ComentarIcone = styled.img`
    height: 30px;
`