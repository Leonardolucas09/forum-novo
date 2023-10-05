import styled from 'styled-components'

export const Fundo = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 75vw;
    min-height: 50vh;
    color: #BFA1D2;
    background-color: #340058;
    font-family: Baskervville;
    font-size: 30px;    
    margin-bottom: 15px;
`

export const Escrever = styled.input`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    width: 65vw;
    height: 40px;
    background-color: #d9d9d9;
    border: none;
    margin-bottom: 15px;
    font-size: 20px;
    padding: 5px;
` 
export const EscreverBio = styled.input`
    display: flex; 
    width: 65vw;
    height: 90px;
    background-color: #d9d9d9;
    border: none;
    margin-bottom: 15px; 
`

export const FtPerfil = styled.img`
    height: 200px;
    width: 200px;
    object-fit: cover;
    margin: 10px;
    align-self: center;
`