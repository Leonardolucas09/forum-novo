import styled from "styled-components"

export const Fundo = styled.header`
    display: flex; 
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    height: 12vh;
    padding-left: 20px;
    width: 81vw;
    background: #0F001A;
    border: 3px solid #6913A5;
    border-left: 2px solid #6913A5;
    gap: 12px; 
`
export const CampoPesquisa = styled.input`
    align-items: center;
    width: 550px;
    height: 35px;
    color: #6913A5;
    background-color: #d9d9d9;
    font-family: Baskervville;
    font-size: 24px;
    border: none;

`
export const Lupa = styled.img`
    width: 30px;
    height: 30px;
`