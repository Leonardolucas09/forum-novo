import styled from "styled-components";

export const ContainerCriar = styled.div`
    display: flex;
`

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column;
    width: 81vw;   
    min-height: 88vh; 
    background: #0F001A;
    border-left: 1.5px solid #6913A5;
`

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 80%;
    padding: 20px;
    /* background-color: red; */
`

export const DivUser = styled.div`
    display: flex;
    gap: 5px;
    align-items:center;
`

export const ImgUser = styled.img`
    border-radius: 50%;
    border: 3px solid;
    border-color: #6913A5;
    height: 70px;;
    width: 70px;;
`

export const UserName = styled.p`
    font-size: 25px;
    color: #BFA1D2;
`

export const Post = styled.textarea`
    color: #BFA1D2;
    background-color: #6913A5;
    border:none;
    min-height: 50%;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 25px;
    padding: 5px;
`

export const BotaoPostar = styled.button`
    color: #BFA1D2;
    border:none;
    background-color: #6913A5;
    font-size: 25px;
    width: 120px;
    align-self: flex-end;
    margin-right: 40px;
`